import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import Title from "../Title/Title";
import Layout from "../Layout/index";
import { useDispatch, useSelector } from "react-redux";
import { GETFRIENDS, GETUSER } from "../../redux/actions";
import axios from "axios";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import styles from "../Title/title.module.scss";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export default function Friends(props: any): JSX.Element {
  const dispatch = useDispatch();

  const [update, setUpdate] = useState(true);

  const [friendToMessage, setFriendToMessage] = useState("");

  const [friendName, setFriendName] = useState("");

  const [uuidMessage, setUuidMessage] = useState("");

  const [message, setMessage] = useState("");

  let user = useSelector((state: any) => state);

  let emailUser = localStorage.getItem("Email") || "";

  let friends = user?.coolor?.friends?.friend || [];

  let currentUser = user?.coolor?.user || {};

  const classes = useStyles();

  let booleanFriends =
    friends && friends.filter((item: any) => item.request === false);

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
      await dispatch(GETFRIENDS(emailUser));
    };
    getUser();
  }, [dispatch, emailUser, update]);

  const handleFriend = (email: string, uuid: string, name: string) => {
    let filterd = friends.filter((item: any) => item.uuid === uuid);
    console.log(filterd[0].messages);
    setFriendToMessage(email);
    setUuidMessage(uuid);
    setFriendName(name);
  };

  const handleSubmitMessage = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (message === "") {
      return toast.error("Message can not be empty");
    }
    await axios
      .post(URL + "handlemessage", {
        date: Date.now(),
        uuid: uuidMessage,
        alert: true,
        message: message,
        from: currentUser.fullname,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    setMessage("");
    await dispatch(GETFRIENDS(emailUser));
    await dispatch(GETUSER(emailUser));
    setUpdate(!update);
  };

  return (
    <Layout>
      <div className={classes.root}>
        <Title title={"Messages"} />
        <Reveal className={classes.reveal} keyframes={customAnimation}>
          <div className={classes.boxFriends}>
            {booleanFriends.length === 0 ? (
              <div className={classes.divTitle}>
                <p className={styles.miniTitle}>
                  You don't have any friends {currentUser.fullname}
                </p>
              </div>
            ) : (
              <Fragment>
                <div className={classes.divSub}>
                  <p className={classes.label}>
                    Select a friend to send a message
                  </p>
                </div>
                <div className={classes.divFriends}>
                  {booleanFriends &&
                    booleanFriends.map((item: any, index: number) => {
                      return (
                        <button
                          onClick={() =>
                            handleFriend(
                              item.emailfriend,
                              item.uuid,
                              item.namefriend
                            )
                          }
                          className={classes.divFriend}
                          key={index}
                        >
                          {!item.request ? (
                            <div className={classes.divFriendName}>
                              <p className={classes.textNone}>
                                {item.namefriend}
                              </p>
                            </div>
                          ) : (
                            <p className={classes.textNone}>No Friends</p>
                          )}
                        </button>
                      );
                    })}
                </div>
              </Fragment>
            )}
          </div>
        </Reveal>
        <div className={classes.boxMessages}>
          <Reveal className={classes.reveal} keyframes={customAnimation}>
            {friendToMessage === "" ? null : (
              <Fragment>
                <div className={classes.divSub}>
                  <p className={classes.label}>
                    Your messages with {friendName}
                  </p>
                </div>
                <div className={classes.boxAllMessages}>
                  {friends &&
                    friends
                      .filter(
                        (item: any) => item.emailfriend === friendToMessage
                      )
                      .map((item: any, key: number) => (
                        <Fragment>
                          {item.messages.length !== 0 ? (
                            <Fragment>
                              {item.messages.map(
                                (messages: any, index: number) => (
                                  <div
                                    className={classes.sortMessage}
                                    key={key}
                                  >
                                    {messages.from === currentUser.fullname ? (
                                      <p className={classes.message}>
                                        From: Me
                                      </p>
                                    ) : (
                                      <p className={classes.message}>
                                        From: {item.namefriend}
                                      </p>
                                    )}
                                    <p className={classes.message}>
                                      {messages.message}
                                    </p>
                                    <hr className={classes.hr} />
                                  </div>
                                )
                              )}
                            </Fragment>
                          ) : (
                            <p className={classes.message}>
                              Send your first message to {friendName}{" "}
                            </p>
                          )}
                        </Fragment>
                      ))}
                </div>
                <div className={classes.boxForm}>
                  <form onSubmit={handleSubmitMessage} className={classes.form}>
                    <div className={classes.divTextArea}>
                      <label className={classes.label}>Message</label>
                      <textarea
                        required={true}
                        className={classes.textArea}
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className={classes.divButton}>
                      <button type="submit" className={classes.button}>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </Fragment>
            )}
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "5rem",
    flexDirection: "column",
    height: "fit-content",
    width: "100%",
    minHeight: "100vh",
  },
  reveal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  boxFriends: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "5rem",
    width: "60%",
    height: "25rem",
    overflowY: "scroll",
    backgroundColor: `${colors.Blue}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    transition: "5s",
    "@media (max-width: 1280px)": {
      width: "100%",
      borderWidth: "none",
      borderRadius: "0px",
      boxShadow: "none",
      border: "none",
      borderTop: `2px solid ${colors.Black}`,
      borderBottom: `2px solid ${colors.Black}`,
    },
  },
  boxMessages: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "5rem",
    marginBottom: "5rem",
    width: "60%",
    height: "fit-content",
    backgroundColor: `${colors.Blue}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    transitionDuration: "5s",
    "@media (max-width: 1280px)": {
      width: "100%",
      borderWidth: "none",
      borderRadius: "0px",
      boxShadow: "none",
      border: "none",
      borderTop: `2px solid ${colors.Black}`,
      borderBottom: `2px solid ${colors.Black}`,
    },
  },
  divTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "3rem",
    marginBottom: "3rem",
    width: "95%",
    "@media (max-width: 1280px)": {
      width: "90%",
      alignItems: "flex-start",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },
  divSub: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "80%",
  },
  label: {
    display: "flex",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "4vh",
    margin: "0",
    marginBottom: "1rem",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  divFriends: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "2rem",
    width: "80%",
    "@media (max-width: 1280px)": {
      width: "90%",
      flexDirection: "column",
    },
  },
  divFriend: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "row",
    width: "40%",
    height: "fit-content",
    padding: "0.5rem",
    backgroundColor: `${colors.Pink}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    marginRight: "1rem",
    marginBottom: "1rem",
    transition: "all 300ms ease-in-out",
    left: 0,
    top: 0,
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
    "@media (max-width: 1280px)": {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  textNone: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: 900,
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
    color: colors.Black,
  },
  divFriendName: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    height: "fit-content",
    marginLeft: "1rem",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  boxAllMessages: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: "5px",
    padding: "0.5rem",
    height: "20rem",
    overflowY: "scroll",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    width: "80%",
    backgroundColor: colors.White,
    "@media (max-width: 1280px)": {
      width: "80%",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  },
  sortMessage: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    height: "fit-content",
  },
  message: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    flexDirection: "column",
    width: "100%",
    height: "fit-content",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "2.5vh",
    fontWeight: 900,
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  hr: {
    width: "90%",
    backgroundColor: colors.Pink,
    border: "transparent",
    borderRadius: "5px",
    height: "0.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  boxForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "2rem",
    marginBottom: "2rem",
    width: "50%",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
  },
  divTextArea: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginBottom: "1rem",
    "@media (max-width: 1280px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  textArea: {
    width: "100%",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    height: "10rem",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    resize: "none",
    "@media (max-width: 1280px)": {
      padding: "0.5rem",
      width: "90%",
    },
  },
  divButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "4rem",
    backgroundColor: `${colors.Yellow}`,
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "3vh",
    padding: "1rem",
    color: colors.Black,
    backgroundSize: `12px, 100%`,
    borderRadius: `255px 15px 225px 15px/15px 225px 15px 255px`,
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    transition: "all 300ms ease-in-out",
    left: 0,
    top: 0,
    margin: "1rem",
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
  },
  icons: {
    width: "3rem",
    height: "3rem",
  },
});

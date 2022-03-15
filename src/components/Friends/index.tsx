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
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

export default function Friends(props: any): JSX.Element {
  const dispatch = useDispatch();

  const [update, setUpdate] = useState(true);

  let user = useSelector((state: any) => state);

  let emailUser = localStorage.getItem("Email") || "";

  let friends = user?.coolor?.friends?.friend || [];

  let currentUser = user?.coolor?.user || {};

  let booleanFriends =
    friends && friends.find((item: any) => item.request === false);

  let booleanRequest =
    friends && friends.find((item: any) => item.request === true);

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
      await dispatch(GETFRIENDS(emailUser));
    };
    getUser();
  }, [dispatch, emailUser]);

  const handleRemoveFriend = async (uuid: string) => {
    await axios
      .post(URL + "removecontact", {
        uuid: uuid,
      })
      .then((response) => {
        toast.success("Friend deleted");
      });
    await dispatch(GETFRIENDS(emailUser));
    await dispatch(GETUSER(emailUser));
    setUpdate(!update);
  };

  const handleAcceptFriend = async (uuid: string) => {
    await axios
      .post(URL + "handlerequest", {
        uuid: uuid,
        fullname: currentUser.fullname,
        profilePhoto: currentUser.profilePhoto,
        useruuid: currentUser.UUID,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    await dispatch(GETFRIENDS(emailUser));
    await dispatch(GETUSER(emailUser));
    setUpdate(!update);
  };

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Title title={"Friends"} />
        <div className={classes.container}>
          {friends.length === 0 ? (
            <div className={classes.divTitle}>
              <p className={styles.miniTitle}>
                You don't have any friends {currentUser.fullname}
              </p>
            </div>
          ) : (
            <Fragment>
              <div className={classes.divTitle}>
                <p className={styles.miniTitle}>
                  These are all your friends {currentUser.fullname}
                </p>
              </div>
              <div className={classes.divSub}>
                <p className={classes.label}>Requests</p>
              </div>
              {booleanRequest && booleanRequest.length !== 0 ? (
                <div className={classes.divFriends}>
                  {friends &&
                    friends.map((item: any, index: number) => {
                      return (
                        <div className={classes.divFriend} key={index}>
                          {item.request ? (
                            <Fragment>
                              <div className={classes.divFriendPhoto}>
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt=""
                                    className={classes.profilePhoto}
                                  />
                                ) : (
                                  <p className={classes.textNone}>No photo</p>
                                )}
                              </div>
                              <div className={classes.divFriendName}>
                                <a
                                  target="_blank"
                                  className={classes.eachLink}
                                  rel="noreferrer"
                                  href={`https://coolormedia.netlify.app/profileOut?uuid=${item.frieduuid}`}
                                >
                                  <p className={classes.textName}>
                                    {item.namefriend}
                                  </p>
                                </a>
                                <p className={classes.textNone}>
                                  {item.emailfriend}
                                </p>
                              </div>
                              <div className={classes.divFriendName}>
                                <button
                                  className={classes.buttons}
                                  onClick={() => handleAcceptFriend(item.uuid)}
                                  type="button"
                                >
                                  <CheckCircle className={classes.icons} />
                                </button>
                                <button
                                  className={classes.buttons}
                                  onClick={() => handleRemoveFriend(item.uuid)}
                                  type="button"
                                >
                                  <CloseCircleOutline
                                    className={classes.icons}
                                  />
                                </button>
                              </div>
                            </Fragment>
                          ) : null}
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className={classes.divSub}>
                  <p className={classes.textNone}>No requests</p>
                </div>
              )}
              <div className={classes.divSub}>
                <p className={classes.label}>Friends</p>
              </div>
              {booleanFriends && booleanFriends.length !== 0 ? (
                <div className={classes.divFriends}>
                  {friends &&
                    friends.map((item: any, index: number) => {
                      return (
                        <div className={classes.divFriend} key={index}>
                          {!item.request ? (
                            <Fragment>
                              <div className={classes.divFriendPhoto}>
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt=""
                                    className={classes.profilePhoto}
                                  />
                                ) : (
                                  <p className={classes.textNone}>No photo</p>
                                )}
                              </div>
                              <div className={classes.divFriendName}>
                                <a
                                  target="_blank"
                                  className={classes.eachLink}
                                  rel="noreferrer"
                                  href={`https://coolormedia.netlify.app/profileOut?uuid=${item.frieduuid}`}
                                >
                                  <p className={classes.textName}>
                                    {item.namefriend}
                                  </p>
                                </a>
                                <p className={classes.textNone}>
                                  {item.emailfriend}
                                </p>
                              </div>
                              <div className={classes.divFriendName}>
                                <button
                                  className={classes.buttons}
                                  onClick={() => handleRemoveFriend(item.uuid)}
                                  type="button"
                                >
                                  <CloseCircleOutline
                                    className={classes.icons}
                                  />
                                </button>
                              </div>
                            </Fragment>
                          ) : null}
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className={classes.divSub}>
                  <p className={classes.textNone}>No Friends</p>
                </div>
              )}
            </Fragment>
          )}
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
  eachLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "fit-content",
    textDecoration: "none",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "5rem",
    marginBottom: "5rem",
    width: "80%",
    backgroundColor: `${colors.Purple}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    transition: "5s",
    "@media (max-width: 1280px)": {
      width: "90%",
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
    width: "80%",
    "@media (max-width: 1280px)": {
      width: "90%",
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
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "5vh",
    margin: "0",
    marginBottom: "1rem",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "4vh",
    },
  },
  divFriends: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginBottom: "2rem",
    width: "80%",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  divFriend: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "row",
    width: "100%",
    height: "fit-content",
    padding: "1rem",
    backgroundColor: `${colors.Blue}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    marginBottom: "2rem",
    "@media (max-width: 1280px)": {
      width: "90%",
      flexDirection: "column"
    },
  },
  divFriendPhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "10rem",
    height: "10rem",
    backgroundColor: colors.Yellow,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
  },
  profilePhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    objectFit: `cover`,
    objectPosition: `center`,
  },
  textNone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: 900,
    marginBottom: "1rem",
    marginTop: "1rem",
    color: colors.Black,
  },
  textName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: 900,
    marginBottom: "1rem",
    marginTop: "1rem",
    color: colors.Black,
    transitionDuration: "1s",
    "&:hover": {
      cursor: "pointer",
      padding: "0.5rem",
      borderRadius: `255px 15px 225px 15px/15px 225px 15px 255px`,
      border: `0.2rem solid ${colors.Black}`,
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    },
  },
  divFriendName: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    width: "30%",
    marginLeft: "5rem",
    height: "fit-content",
    "@media (max-width: 1280px)": {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "0",
      width: "100%",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "5rem",
    height: "4rem",
    backgroundColor: `${colors.Yellow}`,
    fontFamily: ["Trispace", "sans-serif"].join(","),
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

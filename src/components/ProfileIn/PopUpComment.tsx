import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  GETUSER,
  GETPOSTS,
  GETPOSTBYUSER,
  GETPOSTBYUUID,
} from "../../redux/actions";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import axios from "axios";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";
import GlobalPopUp from "../GlobalPopUp/PopUp";

export default function FormJobs(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  let emailUser = localStorage.getItem("Email") || "";

  const [update, setUpdate] = useState(false);

  const [comment, setComment] = useState("");

  const [today, setToday] = useState(new Date());

  let user = useSelector((state: any) => state);

  let currentUser = user?.coolor?.user;

  let UUID = props?.uuid || "";

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
      await dispatch(GETPOSTBYUSER(emailUser));
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      if (UUID !== "") {
        await dispatch(GETPOSTBYUUID(UUID));
      }
    };
    getUser();
  }, [dispatch, emailUser, update]);

  const handleCommentSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await axios
      .post(URL + "addcommenttopost", {
        comment: comment,
        name: currentUser.name + " " + currentUser.lastname,
        date: today,
        id: props.idComment,
        email: emailUser,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    await dispatch(GETPOSTS());
    await dispatch(GETPOSTBYUSER(emailUser));
    if (UUID !== "") {
      await dispatch(GETPOSTBYUUID(UUID));
    }
    setUpdate(!update);
    props.setPopUp(false);
    setComment("");
  };

  return (
    <GlobalPopUp
      top="30%"
      left="25%"
      width="50%"
      height="fit-content"
      backgroundColor={colors.Blue}
      topMobile="20%"
      leftMobile="0%"
      widthMobile="90%"
    >
      <div className={classes.root}>
        <div className={classes.divClose}>
          <button
            onClick={() => {
              props.setPopUp(false);
            }}
            type="button"
            className={classes.buttonClose}
          >
            <CloseCircle />
          </button>
        </div>
        <form onSubmit={handleCommentSubmit} className={classes.form}>
          <div className={classes.divInput}>
            <label className={classes.label}>Write something nice</label>
            <textarea
              className={classes.textarea}
              name="comment"
              required={true}
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </div>
          <div className={classes.divButton}>
            <button className={classes.button} type="submit">
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </GlobalPopUp>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
  },
  divClose: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
  },
  buttonClose: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "4rem",
    height: "3rem",
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
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  divInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem",
    width: "80%",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  label: {
    display: "flex",
    width: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "3vh",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  textarea: {
    width: "80%",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    height: "10rem",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    resize: "none",
  },
  divButton: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "5rem",
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
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
  },
});

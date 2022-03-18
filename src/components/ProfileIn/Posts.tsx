import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { GETUSER, GETPOSTBYUSER } from "../../redux/actions";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import axios from "axios";
import { Pen } from "@styled-icons/boxicons-regular/Pen";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";
import FormPosts from "./FormPosts";
import { Like } from "@styled-icons/boxicons-solid/Like";
import PopUpComment from "./PopUpComment";
import { getTime } from "./GetTime";
import styles from "../Title/title.module.scss";

export default function Posts(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [popUp, setPopUp] = useState(false);

  const [update, setUpdate] = useState(true);

  const [edit, setEdit] = useState(false);

  const [idComment, setIdComment] = useState("");

  let user = useSelector((state: any) => state);

  let currentUser = user?.coolor?.user;

  let posts = user?.coolor?.postuser?.posts;

  let emailUser = localStorage.getItem("Email") || "";

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
      await dispatch(GETPOSTBYUSER(emailUser));
    };
    getUser();
  }, [dispatch, emailUser, update]);

  const handleDeletePost = async (idToDelete: any) => {
    await axios
      .post(URL + "deleteposts", {
        email: emailUser,
        id: idToDelete,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    await dispatch(GETPOSTBYUSER(emailUser));
    await dispatch(GETUSER(emailUser));
    setUpdate(!update);
  };

  const handleLikeAdd = async (id: number) => {
    setDisabled(true);
    await axios
      .post(URL + "handlelike", {
        name: currentUser.name + " " + currentUser.lastname,
        id: id,
        email: emailUser,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    await dispatch(GETUSER(emailUser));
    await dispatch(GETPOSTBYUSER(emailUser));
    setUpdate(!update);
    setDisabled(false);
  };

  return (
    <Fragment>
      {user?.coolor?.postuser?.posts ? (
        <div className={classes.root}>
          <div className={classes.divTitle}>
            <h3 className={styles.microTitles}>Posts</h3>
          </div>
          <div className={classes.divButton}>
            <button
              type="button"
              onClick={() => {
                setEdit(!edit);
              }}
              className={classes.button}
            >
              <Pen />
            </button>
          </div>
          {edit ? (
            <FormPosts setEdit={setEdit} />
          ) : (
            <div className={classes.boxPosts}>
              {popUp ? (
                <PopUpComment idComment={idComment} setPopUp={setPopUp} />
              ) : null}
              <div className={classes.divSubtitle}>
                <p className={classes.label}> Your Posts</p>
              </div>
              {posts?.map((post: any) => {
                return (
                  <div className={classes.eachPost} key={post.Id}>
                    <div className={classes.divAuthor}>
                      <p className={classes.name}>{post.name}</p>
                      <button
                        onClick={() => handleDeletePost(post.Id)}
                        className={classes.button}
                        type="button"
                      >
                        <CloseCircle />
                      </button>
                    </div>
                    <div className={classes.divTitlePost}>
                      <h3 className={styles.microTitles}>{post.title}</h3>
                    </div>
                    {post?.image ? (
                      <img
                        src={post.image}
                        alt="post"
                        className={classes.imagePost}
                      />
                    ) : null}
                    <div className={classes.divDescription}>
                      <p className={classes.description}>{post.description}</p>
                    </div>
                    <div className={classes.divSeparate}>
                      <div className={classes.first}>
                        <button
                          onClick={() => handleLikeAdd(post.Id)}
                          disabled={disabled}
                          type="button"
                          className={classes.button}
                        >
                          <Like />
                        </button>
                        <button className={classes.number}>
                          {post.likes.length}
                        </button>
                      </div>
                      <div className={classes.second}>
                        <button
                          type="button"
                          onClick={() => {
                            setIdComment(post.Id);
                            setPopUp(!popUp);
                          }}
                          className={classes.buttonComment}
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                    {post?.comments &&
                      post.comments.map((comment: any) => {
                        return (
                          <div
                            className={classes.divDescription}
                            key={comment.id}
                          >
                            <div className={classes.divSeparate}>
                              <p className={classes.description}>
                                {comment.name}
                              </p>
                              <p className={classes.description}>
                                {getTime(new Date(comment.date))}
                              </p>
                            </div>
                            <hr className={classes.hr} />
                            <div className={classes.divCommentContent}>
                              <p className={classes.description}>
                                {comment.comment}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : null}
    </Fragment>
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
    borderRadius: "5px",
    transition: "5s",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  divTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "60%",
    backgroundColor: colors.Blue,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  divSubtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "60%",
    backgroundColor: colors.Blue,
    borderRadius: "5px",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    marginTop: "2rem",
    marginBottom: "2rem",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  divButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "Flex-end",
    width: "60%",
    marginTop: "2rem",
    marginBottom: "2rem",
    marginRight: "2rem",
  },
  button: {
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
  label: {
    display: "flex",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "5vh",
    margin: "0",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "4vh",
    },
  },
  boxPosts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
  },
  eachPost: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "60%",
    backgroundColor: colors.Blue,
    border: `2px solid ${colors.Black}`,
    borderRadius: "5px",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    padding: "2rem",
    marginBottom: "2rem",
    "@media (max-width: 1280px)": {
      padding: "0rem",
      width: "100%",
      borderWidth: "none",
      borderRadius: "0px",
      boxShadow: "none",
      border: "none",
      borderTop: `2px solid ${colors.Black}`,
      borderBottom: `2px solid ${colors.Black}`,
    },
  },
  divAuthor: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    textAlign: "left",
    flexDirection: "row",
    width: "90%",
  },
  name: {
    display: "flex",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "3vh",
    margin: "0",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: 900,
  },
  divTitlePost: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    marginBottom: "2rem",
  },
  titlePost: {
    display: "flex",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontWeight: "900",
    color: colors.Black,
    fontSize: "4vh",
    margin: "0",
    textShadow: `${colors.White} 2px 2px 0px, ${colors.White} 4px 4px 0px`,
  },

  imagePost: {
    width: "640px",
    height: "480px",
    objectFit: `fill`,
    objectPosition: `center`,
    border: `.2rem solid ${colors.Black}`,
    backgroundColor: colors.White,
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "320px",
      height: "240px",
    },
  },
  divDescription: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    flexDirection: "column",
    width: "80%",
    height: "fit-content",
    padding: "0.5rem",
    backgroundColor: colors.White,
    borderRadius: "5px",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    marginBottom: "2rem",
    marginTop: "2rem",
    "@media (max-width: 1280px)": {
      padding: "1rem",
      width: "80%",
    },
  },
  description: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    color: colors.Black,
    margin: "0",
  },
  divSeparate: {
    display: "flex",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "1rem",
    "@media (max-width: 1280px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      width: "90%",
    },
  },
  first: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "40%",
    "@media (max-width: 1280px)": {
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
  },
  number: {
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
    color: colors.Black,
    borderRadius: `255px 15px 225px 15px/15px 225px 15px 255px`,
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    marginLeft: "3rem",
    "@media (max-width: 1280px)": {
      width: "4rem",
      height: "3rem",
      marginLeft: "1rem",
    },
  },
  second: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "50%",
    "@media (max-width: 1280px)": {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  buttonComment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15rem",
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
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  hr: {
    display: "flex",
    width: "90%",
    backgroundColor: colors.Black,
    border: "transparent",
    height: "0.5rem",
    borderRadius: "5px",
  },
  divCommentContent: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "start",
    width: "100%",
    flexDirection: "column",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
});

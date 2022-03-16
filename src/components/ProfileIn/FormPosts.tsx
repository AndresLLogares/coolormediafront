import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { GETUSER, GETPOSTBYUSER } from "../../redux/actions";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Pen } from "@styled-icons/boxicons-regular/Pen";

export default function FormPosts(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  let emailUser = localStorage.getItem("Email") || "";

  const [update, setUpdate] = useState(false);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [data, setData] = useState({
    CLOUDINARY_URL: "",
    CLOUDINARY_PRESET: "",
  });

  const [imagePost, setImagePost] = useState("");

  let user = useSelector((state: any) => state);

  user = user?.coolor?.user;

  let formatDate = new Intl.DateTimeFormat("en");

  let dateToday = formatDate.formatToParts();

  const today =
    dateToday[0].value +
    dateToday[1].value +
    dateToday[2].value +
    dateToday[3].value +
    dateToday[4].value;

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
      await dispatch(GETPOSTBYUSER(emailUser));
    };
    const fetchData = async () => {
      setData({
        CLOUDINARY_URL: process.env.REACT_APP_CLOUDINARY_URL as string,
        CLOUDINARY_PRESET: process.env.REACT_APP_CLOUDINARY_PRESET as string,
      });
    };
    fetchData();
    getUser();
  }, [dispatch, emailUser, update]);

  const handleInputFile = () => {
    document!.getElementById("filePost")!.click();
  };

  const HandleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event!.currentTarget!.files![0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", data.CLOUDINARY_PRESET);

    const res = await axios.post(data.CLOUDINARY_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    await setImagePost(res.data.url);
    toast.success("Successfully uploaded");
  };


  const handleSubmitPosts = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let id = uuidv4();
    await axios
      .post(URL + "addposts", {
        email: emailUser.toLowerCase(),
        id: id,
        picture: user?.profilePhoto || "https://res.cloudinary.com/andreslogares/image/upload/v1629471470/gjry7tvilh0z7wh5m4pn.gif",
        name: user.name + " " + user.lastname,
        useruuid: user.UUID,
        title: title,
        image: imagePost,
        date: today,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        toast.success(response.data.message);
      });
    await dispatch(GETUSER(emailUser));
    await dispatch(GETPOSTBYUSER(emailUser));
    setImagePost("");
    setUpdate(!update);
    setTitle("");
    setDescription("");
    props.setEdit(false);
  };
  return (
    <form onSubmit={handleSubmitPosts} className={classes.root}>
      <div className={classes.divTitle}>
        <h3 className={classes.title}>Add a post</h3>
      </div>
      <div className={classes.divInput}>
        <label className={classes.label}>Title</label>
        <input
          className={classes.input}
          name="title"
          required={true}
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className={classes.divInput}>
        <label className={classes.label}>Description</label>
        <textarea
          className={classes.textarea}
          name="description"
          required={true}
          value={description}
          onChange={(event) => {
            setDescription(event.currentTarget.value);
          }}
        />
      </div>
      <div className={classes.divInput}>
        <label className={classes.label}>Add an image</label>
        <button
          className={classes.buttonSmall}
          onClick={handleInputFile}
          type="button"
        >
          <Pen />
        </button>
        <input
          onChange={HandleImage}
          type="file"
          style={{ display: "none" }}
          id="filePost"
          name="filePost"
        />
      </div>
      {imagePost ? (
        <img className={classes.image} src={imagePost} alt="" />
      ) : null}
      <div className={classes.divButton}>
        <button className={classes.button} type="submit">
          Add Post
        </button>
      </div>
    </form>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    backgroundColor: colors.Purple,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    width: "60%",
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
    width: "100%",
    marginTop: "1rem",  
    marginBottom: "1rem",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  title: {
    display: "flex",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "5vh",
    margin: "0",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "4vh",
    },
  },
  divInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem",
    width: "40%",
    "@media (max-width: 1280px)": {
      width: "90%",
      margin: "0rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
  label: {
    display: "flex",
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "3vh",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
      width: "90%",
    },
  },
  input: {
    width: "80%",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  textarea: {
    width: "80%",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    height: "10rem",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    resize: "none",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  buttonSmall: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "4rem",
    height: "3rem",
    marginTop: "2rem",
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
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
  },
  image: {
    width: "640px",
    height: "480px",
    objectFit: `fill`,
    objectPosition: `center`,
    border: `.2rem solid ${colors.Black}`,
    borderRadius: "5px",
    marginBottom: "2rem",
    "@media (max-width: 1280px)": {
      width: "320px",
      height: "240px",
    },
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
    "&:hover": {
      cursor: "pointer",
      left: "4px",
      top: "4px",
      boxShadow: `0 0 0 0 ${colors.Black}`,
    },
  },
});

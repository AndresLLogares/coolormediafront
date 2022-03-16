import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { GETUSER } from "../../redux/actions";
import toast from "react-hot-toast";
import axios from "axios";
import { Pen } from "@styled-icons/boxicons-regular/Pen";
import { URL } from "../../utils/url";
import Technologies from "./Technologies";

export default function First(): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    CLOUDINARY_URL: "",
    CLOUDINARY_PRESET: "",
  });

  const [update, setUpdate] = useState(true);

  let user = useSelector((state: any) => state);

  let emailUser = localStorage.getItem("Email");

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
    };
    const fetchData = async () => {
      setData({
        CLOUDINARY_URL: process.env.REACT_APP_CLOUDINARY_URL as string,
        CLOUDINARY_PRESET: process.env.REACT_APP_CLOUDINARY_PRESET as string,
      });
    };
    getUser();
    fetchData();
  }, [dispatch, emailUser]);

  const handleInputFile = () => {
    document!.getElementById("file")!.click();
  };

  const handleInputFileProfile = () => {
    document!.getElementById("fileProfile")!.click();
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
    await axios
      .post(URL + "UploadPhotos/back", {
        email: emailUser,
        photoUrl: res.data.url,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(GETUSER(emailUser));
        setUpdate(!update);
      });
  };

  const HandleImageProfile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event!.currentTarget!.files![0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", data.CLOUDINARY_PRESET);

    const res = await axios.post(data.CLOUDINARY_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    await axios
      .post(URL + "UploadPhotos/profile", {
        email: emailUser,
        photoUrl: res.data.url,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(GETUSER(emailUser));
        setUpdate(!update);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.boxBackground}>
          {user?.coolor?.user?.backPhoto ? (
            <img
              src={user?.coolor?.user?.backPhoto}
              alt=""
              className={classes.backImage}
            />
          ) : (
            <p className={classes.textNone}>Select a Photo</p>
          )}
        </div>
        <div className={classes.sortButton}>
          <button
            onClick={handleInputFile}
            type="button"
            className={classes.button}
          >
            <Pen />
          </button>
          <input
            onChange={HandleImage}
            type="file"
            style={{ display: "none" }}
            id="file"
            name="file"
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.separateColumns}>
          <div className={classes.firstColumn}>
            <div className={classes.boxProfilePhoto}>
              {user?.coolor?.user?.profilePhoto ? (
                <img
                  src={user?.coolor?.user?.profilePhoto}
                  alt=""
                  className={classes.profilePhoto}
                />
              ) : (
                <p className={classes.textNone}>Select a Photo</p>
              )}
            </div>
            <button
              onClick={handleInputFileProfile}
              type="button"
              className={classes.button}
            >
              <Pen />
            </button>
            <input
              onChange={HandleImageProfile}
              type="file"
              style={{ display: "none" }}
              id="fileProfile"
              name="fileProfile"
            />
            <div className={classes.boxInformation}>
              <p className={classes.information}>
                {user?.coolor?.user?.fullname}
              </p>
              <p className={classes.information}>{user?.coolor?.user?.email}</p>
            </div>
          </div>
          <div className={classes.secondColumn}>
            <Technologies />
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "5rem",
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "60%",
    height: "fit-content",
    marginBottom: "5rem",
    "@media (max-width: 1280px)": {
      width: "100%",
      height: "auto",
    },
  },
  boxBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
    backgroundColor: colors.Yellow,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "90%",
      height: "auto",
    },
  },
  backImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    objectFit: `contain`,
    objectPosition: `center`,
  },
  textNone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    fontSize: "5vh",
    fontWeight: 900,
    color: colors.Black,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  sortButton: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
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
  separateColumns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "fit-content",
    "@media (max-width: 1280px)": {
      width: "100%",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
    },
  },
  firstColumn: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "30%",
    flexDirection: "column",
    "@media (max-width: 1280px)": {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  boxProfilePhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "15rem",
    height: "15rem",
    backgroundColor: colors.Yellow,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "80%",
      height: "auto",
      
    },
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
  boxInformation: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
    flexDirection: "column",
    backgroundColor: colors.Purple,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  information: {
    display: "flex",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "3vh",
    margin: "0",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  secondColumn: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "70%",
    "@media (max-width: 1280px)": {
      width: "100%",
      marginTop: "2rem",
    },
  },
});

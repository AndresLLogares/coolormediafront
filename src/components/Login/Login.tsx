import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import jwt_decode from "jwt-decode";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";
import { SETCURRENTUSER } from "../../redux/actions";
import { useDispatch } from "react-redux";
import setToken from "../../utils/setToken";
import { loginHook } from "./utils";
import toast from "react-hot-toast";
import GlobalPopUp from "../GlobalPopUp/PopUp";
import { URL } from "../../utils/url";
import styles from "../Title/title.module.scss";
export default function Login(): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [information, setInformation] = useState({
    email: "",
    password: "",
  });

  let emailUser = localStorage.getItem("Email") || "";

  const [emailPopUp, setEmailPopUp] = useState("");

  const [popUp, setPopUp] = useState(false);

  const handleReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailUser !== "") {
      toast.error("You already are logged in");
      setTimeout(
        () =>
          (window.location.href = "https://coolormedia.netlify.app/home"),
        1000
      );
    }
    await axios
      .post(URL + "geneLink", {
        email: emailPopUp.toLowerCase(),
      })
      .then(async (response) => {
        if (response.data.success === true) {
          toast.success(response.data.message);
        } else {
          toast.error("E-Mail not found");
        }
      });
    setEmailPopUp("");
    setPopUp(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios
      .post(URL + "login", {
        email: information.email.toLowerCase(),
        password: information.password,
      })
      .then(async (response) => {
        if (response.data.message !== "Welcome Back") {
          return toast.error(response.data.message);
        } else {
          toast.success(
            response.data.message + " " + response.data.firstname + "!"
          );
          const { token, firstname, email } = response.data;
          await loginHook(token, firstname, email);
          await setToken(token);
          const decoded = jwt_decode(token);
          dispatch(SETCURRENTUSER(decoded));
          setTimeout(
            () =>
              (window.location.href = "https://coolormedia.netlify.app/home"),
            1000
          );
        }
        setInformation({
          email: "",
          password: "",
        });
      });
  };

  return (
    <div className={classes.root}>
      {popUp ? (
        <GlobalPopUp
          top="10%"
          left="25%"
          width="50%"
          height="fit-content"
          backgroundColor={colors.Pink}
          topMobile="20%"
          leftMobile="0%"
          widthMobile="90%"
        >
          <div className={classes.divClose}>
            <button
              onClick={() => setPopUp(false)}
              type="button"
              className={classes.buttonPopUp}
            >
              <CloseCircle size={30} color={colors.Black} />
            </button>
          </div>
          <div className={classes.divContentPopUp}>
            <p className={classes.textPopUp}>
              Please fill in the input so that we can send you an email.
            </p>
            <form onSubmit={handleReset} className={classes.form}>
              <div className={classes.divInput}>
                <label htmlFor="email" className={classes.label}>
                  Email
                </label>
                <input
                  required
                  name="emailPopUp"
                  placeholder="Email"
                  type="email"
                  value={emailPopUp}
                  onChange={(e) => setEmailPopUp(e.target.value)}
                  className={classes.input}
                  autoComplete="off"
                />
              </div>
              <div className={classes.divButton}>
                <button className={classes.button} type="submit">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </GlobalPopUp>
      ) : null}
      <div className={classes.divTitle}>
        <h1 className={styles.microTitles}>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.divInput}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            required
            name="email"
            placeholder="Email"
            type="email"
            value={information.email}
            onChange={(e) =>
              setInformation({ ...information, email: e.target.value })
            }
            className={classes.input}
            autoComplete="off"
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="password" className={classes.label}>
            Password
          </label>
          <input
            required
            name="password"
            placeholder="Password"
            type="password"
            value={information.password}
            onChange={(e) =>
              setInformation({ ...information, password: e.target.value })
            }
            className={classes.input}
            autoComplete="off"
          />
        </div>
        <div className={classes.divButton}>
          <button className={classes.button} type="submit">
            Login
          </button>
        </div>
      </form>
      <div className={classes.divButton}>
        <button
          className={classes.button}
          type="button"
          onClick={() => setPopUp(true)}
        >
          Reset Password?
        </button>
      </div>
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    backgroundColor: colors.Purple,
    height: "fit-content",
    minHeight: "50vh",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    padding: "2rem",
    border: `solid ${colors.Black}`,
    borderWidth: "3px 4px 3px 5px",
    borderRadius: "95% 4% 92% 5%/4% 95% 6% 95%",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    transition: "background-color 1s ease",
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
  divClose: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: "3rem",
    marginTop: "1rem",
  },
  buttonPopUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "4rem",
    height: "3rem",
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
  divContentPopUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    marginTop: "0rem",
    marginBottom: "2rem",
  },
  divTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
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
    marginTop: "1rem",
    marginBottom: "2rem",
    width: "40%",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  textPopUp: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "4vh",
    marginBottom: `0.5rem`,
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },

  label: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "5vh",
    marginBottom: `0.5rem`,
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "4vh",
    },
  },
  input: {
    width: "100%",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
  },
  icons: {
    width: "6rem",
    height: "3rem",
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

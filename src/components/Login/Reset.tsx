import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import Title from "../Title/Title";
import Layout from "../Layout/index";
import axios from "axios";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import styles from "../Title/title.module.scss";

export default function Reset(props: any): JSX.Element {
  const [information, setInformation] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios
      .post(URL + "reset", {
        email: information.email.toLocaleLowerCase(),
        newpassword: information.password,
      })
      .then(async (response) => {
        if (response.data.success === true) {
          toast.success(response.data.message);
          return setTimeout(
            () => (window.location.href = "https://coolormedia.netlify.app/"),
            1000
          );
        } else {
          return toast.error(response.data.message);
        }
      });
    setInformation({ email: "", password: "" });
  };

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Title title={"Reset"} />
        <div className={classes.boxReset}>
          <div className={classes.divTitle}>
            <h3 className={styles.microTitles}>Reset your password</h3>
          </div>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.divInput}>
              <label className={classes.label}>Email</label>
              <input
                type="email"
                name="email"
                className={classes.input}
                autoComplete="off"
                value={information.email}
                onChange={(event) =>
                  setInformation({ ...information, email: event.target.value })
                }
              />
            </div>
            <div className={classes.divInput}>
              <label className={classes.label}>New Password</label>
              <input
                type="password"
                name="password"
                className={classes.input}
                autoComplete="off"
                value={information.password}
                onChange={(event) =>
                  setInformation({
                    ...information,
                    password: event.target.value,
                  })
                }
              />
            </div>
            <div className={classes.divButton}>
              <button className={classes.button} type="submit">
                Reset
              </button>
            </div>
          </form>
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
  boxReset: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    backgroundColor: colors.Purple,
    height: "fit-content",
    minHeight: "50vh",
    marginTop: "5rem",
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
      width: "80%",
    },
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

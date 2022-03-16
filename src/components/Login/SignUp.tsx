import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { URL } from "../../utils/url";
import { calculateAge, changeMonth } from "../../utils/singUpUtils";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import styles from "../Title/title.module.scss";

export default function SignUp(props:any): JSX.Element {
  const classes = useStyles();

  const [information, setInformation] = useState({
    email: "",
    password: "",
    controlPassword: "",
    name: "",
    lastName: "",
  });

  const [date, setDate] = useState(new Date());

  let monthDate: any = date.toString().slice(4, 7);

  monthDate = changeMonth(monthDate);

  if (monthDate < 10) {
    monthDate = "0" + monthDate;
  }

  let dayDate = date.toString().slice(8, 10);

  let yearDate = date.toString().slice(11, 15);

  const dateOfBirthday = yearDate + "/" + monthDate + "/" + dayDate;

  const age = calculateAge(
    new Date(Number(yearDate), Number(monthDate), Number(dayDate))
  );
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (information.controlPassword !== information.password) {
      return toast.error("Passwords do not match");
    } else if (age < 16) {
      return toast.error("You must be at least 16 years old");
    }
    await axios
      .post(URL + "signup", {
        name: information.name,
        email: information.email.toLowerCase(),
        password: information.password,
        lastname: information.lastName,
        age: age,
        dateOfBirthday: dateOfBirthday,
        uuid: uuidv4(),
      })
      .then(async (response) => {
        if (!response.data.success) {
          return toast.error(response.data.message);
        } else {
          await setInformation({
            email: "",
            password: "",
            controlPassword: "",
            name: "",
            lastName: "",
          });
          toast.success(response.data.message);
          props.setChecked(false);
        }
      });
  };
  return (
    <div className={classes.root}>
      <div className={classes.divTitle}>
        <h1 className={styles.microTitles}>Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.divInput}>
          <label htmlFor="name" className={classes.label}>
            Name
          </label>
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={information.name}
            onChange={(e) =>
              setInformation({ ...information, name: e.target.value })
            }
            className={classes.input}
            autoComplete="off"
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="lastName" className={classes.label}>
            Last name
          </label>
          <input
            name="lastName"
            placeholder="Last name"
            type="text"
            value={information.lastName}
            onChange={(e) =>
              setInformation({ ...information, lastName: e.target.value })
            }
            className={classes.input}
            autoComplete="off"
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
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
            name="password"
            placeholder="Password"
            type="password"
            value={information.password}
            minLength={6}
            onChange={(e) =>
              setInformation({ ...information, password: e.target.value })
            }
            className={classes.input}
            autoComplete="off"
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="controlPassword" className={classes.label}>
            Repeat Password
          </label>
          <input
            name="controlPassword"
            minLength={6}
            placeholder="Repeat Password"
            type="password"
            value={information.controlPassword}
            onChange={(e) =>
              setInformation({
                ...information,
                controlPassword: e.target.value,
              })
            }
            className={classes.input}
            autoComplete="off"
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="birthday" className={classes.label}>
            Birthday
          </label>
          <input
            name="birthday"
            placeholder="Birthday"
            type="Date"
            className={classes.input}
            autoComplete="off"
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="age" className={classes.label}>
            Birthday
          </label>
          <input
            name="dateOfBirthday"
            placeholder="Birthday"
            type="string"
            value={dateOfBirthday}
            className={classes.input}
            autoComplete="off"
            disabled
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="age" className={classes.label}>
            Age
          </label>
          <input
            name="age"
            placeholder="Birthday"
            type="number"
            value={age}
            className={classes.input}
            autoComplete="off"
            disabled
          />
        </div>
        <div className={classes.divButton}>
          <button className={classes.button} type="submit">
            Sign Up
          </button>
        </div>
      </form>
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
    '&:disabled': {
      backgroundColor: colors.White,
    },
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

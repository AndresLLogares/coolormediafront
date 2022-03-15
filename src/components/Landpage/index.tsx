import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Stack, Switch } from "@mui/material";
import styles from "./title.module.scss";
import { colors } from "../../utils/colors";
import { styled } from "@mui/material/styles";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import { Toaster } from "react-hot-toast";

const MySwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25px)",
      color: colors.Black,
      "& + .MuiSwitch-track": {
        backgroundColor: colors.Pink,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: colors.Yellow,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: colors.Blue,
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function Landpage(): JSX.Element {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Toaster />
      <div className={classes.divTitle}>
        <div className={classes.boxTitle}>
          <h1 className={styles.title}>CoolorMedia</h1>
        </div>
      </div>
      <div className={classes.divSwitch}>
        <Stack direction="row" spacing={2} alignItems="center">
          <p className={classes.textSwitch}>Login</p>
          <MySwitch
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <p className={classes.textSwitch}>Sign up</p>
        </Stack>
      </div>
      <div className={classes.divComponent}>
        {checked ? <SignUp setChecked={setChecked} /> : <Login />}
      </div>
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
  },
  divTitle: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  boxTitle: {
    display: "flex",
    width: "50%",
    height: "fit-content",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: colors.Blue,
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "85%",
    },
  },

  divSwitch: {
    display: "flex",
    width: "30%",
    height: "fit-content",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    backgroundColor: colors.Turquoise,
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "85%",
    },
  },
  textSwitch: {
    fontFamily: ["Dekko", "sans-serif"].join(","),
    fontWeight: "900",
    color: colors.Black,
    fontSize: "5vh",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  divComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginTop: "5rem",
    marginBottom: "5rem",
  },
});

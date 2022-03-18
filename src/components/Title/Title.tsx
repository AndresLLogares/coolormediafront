import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import styles from "./title.module.scss";

export default function GlobalTitle(props: any): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "40%",
    height: "fit-content",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "1rem",
    "@media (max-width: 1280px)": {
      width: "85%",
    },
  },
});

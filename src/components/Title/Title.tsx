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
    backgroundColor: colors.Blue,
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "85%",
    },
  },
});

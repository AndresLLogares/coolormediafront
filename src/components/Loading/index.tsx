import { makeStyles } from "@mui/styles";
import "./loading.scss";
export default function Loading(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.sortLoading}>
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  sortLoading: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: "20rem",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { lazy, Suspense } from "react";
import { makeStyles } from "@mui/styles";
import Loading from "../Loading";
const Title = lazy(() => import("../Title/Title"));
const Layout = lazy(() => import("../Layout/index"));
const First = lazy(() => import("./FIrst"));
const Education = lazy(() => import("./Education"));
const Jobs = lazy(() => import("./Jobs"));
const Posts = lazy(() => import("./Posts"));

export default function ProfileIn(props: any): JSX.Element {
  const classes = useStyles();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <div className={classes.root}>
          <Title title={"My Profile"} />
          <div className={classes.eachComponent}>
            <First />
          </div>
          <div className={classes.eachComponent}>
            <Education />
          </div>
          <div className={classes.eachComponent}>
            <Jobs />
          </div>
          <div className={classes.eachComponent}>
            <Posts />
          </div>
        </div>
      </Suspense>
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
  eachComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginBottom: "5rem",
  },
});

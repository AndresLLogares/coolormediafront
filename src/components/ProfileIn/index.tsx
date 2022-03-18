import { lazy, Suspense, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Loading from "../Loading";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const Title = lazy(() => import("../Title/Title"));
const Layout = lazy(() => import("../Layout/index"));
const First = lazy(() => import("./FIrst"));
const Education = lazy(() => import("./Education"));
const Jobs = lazy(() => import("./Jobs"));
const Posts = lazy(() => import("./Posts"));

const customAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;
export default function ProfileIn(props: any): JSX.Element {
  const classes = useStyles();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <div className={classes.root}>
          <Title title={"Your Profile"} />
          <Reveal className={classes.eachComponent} keyframes={customAnimation}>
            <First />
          </Reveal>
          <Reveal className={classes.eachComponent} keyframes={customAnimation}>
            <Education />
          </Reveal>
          <Reveal className={classes.eachComponent} keyframes={customAnimation}>
            <Jobs />
          </Reveal>
          <Reveal className={classes.eachComponent} keyframes={customAnimation}>
            <Posts />
          </Reveal>
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
    "@media (max-width: 1280px)": {
      paddingTop: "2rem",
    }
  },
  eachComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginBottom: "5rem",
    "@media (max-width: 1280px)": {
      marginBottom: "2rem",
    }
  },
});

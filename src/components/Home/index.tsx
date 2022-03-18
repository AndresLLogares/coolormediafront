import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import Title from "../Title/Title";
import Layout from "../Layout/index";
import PostsHome from "../PostsHome/";
export default function Home(props: any): JSX.Element {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Title title={"Posts"} />
        <div className={classes.divComponent}>
          <PostsHome />
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
  divComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "3rem",
    marginBottom: "3rem",
    height: "fit-content",
  },
});

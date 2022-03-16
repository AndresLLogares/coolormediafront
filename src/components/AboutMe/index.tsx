import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import Title from "../Title/Title";
import Layout from "../Layout/index";
import Hi from "../../assets/Hi.gif";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Portfolio } from "@styled-icons/zondicons/Portfolio";
import { TextDocument } from "@styled-icons/entypo/TextDocument";

export default function AboutMe(props: any): JSX.Element {
  const classes = useStyles();
  
  return (
    <Layout>
      <div className={classes.root}>
        <Title title={"About Me"} />
        <div className={classes.sortBox}>
          <div className={classes.box}>
            <div className={classes.sortTitle}>
              <h3 className={classes.subTitle}>
                Hello, I am Andres, the person who has made this website, you
                can contact me in the following ways
              </h3>
            </div>
            <div className={classes.twoColumns}>
              <div className={classes.columnOne}>
                <a
                  className={classes.button}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1jkP_jCG66JDquoF5S_2Xm7YdkRo0C2gz/view?usp=sharing"
                >
                  <TextDocument className={classes.icons} />
                  Resume
                </a>
                <a
                  className={classes.button}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://andreslogares.netlify.app/"
                >
                  <Portfolio className={classes.icons} />
                  Portfolio
                </a>
                <a
                  className={classes.button}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndresLLogares"
                >
                  <Github className={classes.icons} />
                  GitHub
                </a>
                <a
                  className={classes.button}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/andres-logares/"
                >
                  <Linkedin className={classes.icons} />
                  LinkeDIn
                </a>
                <a
                  className={classes.button}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:andresl940@hotmail.com"
                >
                  <Email className={classes.icons} />
                  Email
                </a>
              </div>

              <div className={classes.columnTwo}>
                <img src={Hi} alt="Hi" className={classes.hi} />
              </div>
            </div>
          </div>
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
  sortBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "60%",
    height: "fit-content",
    backgroundColor: `${colors.Purple}`,
    borderRadius: `255px 15px 225px 15px/15px 225px 15px 255px`,
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
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
  sortTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "90%",
    height: "fit-content",
    padding: "1rem",
    flexDirection: "column",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  subTitle: {
    display: "flex",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "5vh",
    margin: "0",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "5vh",
    },
  },
  twoColumns: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "2rem",
    marginBottom: "5rem",
    "@media (max-width: 1280px)": {
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  columnOne: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "fit-content",
    "@media (max-width: 1280px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  columnTwo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    margin: "1rem",
    "@media (max-width: 1280px)": {
      width: "90%",
      marginBottom: "2rem",
    },
  },
  hi: {
    width: "100%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    margin: "1rem",
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
    "@media (max-width: 1280px)": {
      margin: "0",
      marginBottom: "2rem",
      width: "80%",
    },
  },
  icons: {
    width: "2.5rem",
    marginRight: "1rem",
  },
});

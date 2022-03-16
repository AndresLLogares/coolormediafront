import { useEffect, Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Title/Title";
import Layout from "../Layout/index";
import { GETNEWS } from "../../redux/actions";

export default function News(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  let store = useSelector((state: any) => state);

  let news = store?.coolor?.news?.articles;

  useEffect(() => {
    const getNews = async () => {
      await dispatch(GETNEWS());
    };
    getNews();
  }, [dispatch]);

  return (
    <Layout>
      <div className={classes.root}>
        <Title title={"News"} />
        <div className={classes.container}>
          {news &&
            news.map((item: any, index: number) => (
              <div className={classes.eachNew} key={index}>
                <div className={classes.divTitle}>
                  <h3 className={classes.title}>{item.title}</h3>
                </div>
                <div className={classes.divImage}>
                  <img alt="" className={classes.image} src={item.urlToImage} />
                </div>
                <div className={classes.divDescription}>
                  <p className={classes.description}>{item.description}</p>
                </div>
                <div className={classes.divButton}>
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    className={classes.eachLink}
                    rel="noreferrer"
                    href={item.url}
                  >
                    <button className={classes.button}>Read More</button>
                  </a>
                </div>
              </div>
            ))}
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
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "5rem",
    marginBottom: "5rem",
    width: "60%",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  eachNew: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    backgroundColor: colors.Purple,
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
    width: "90%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "4vh",
    fontWeight: 900,
    color: colors.White,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  divImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "auto",
    borderRadius: "5px",
    border: `.2rem solid ${colors.Black}`,
    "@media (max-width: 1280px)": {
      width: "82%",
      height: "auto",
    },
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    objectFit: `contain`,
    objectPosition: `center`,
  },
  divDescription: {
    display: "flex",
    width: "58%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "0.5rem",
    backgroundColor: colors.White,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "80%",
      height: "auto",
    },
  },
  description: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: 900,
    color: colors.Black,    
    "@media (max-width: 1280px)": {
      fontSize: "2.5vh",
    },
  },
  divButton: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  eachLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textDecoration: "none",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "5rem",
    marginTop: "2rem",
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

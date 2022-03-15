import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { makeStyles } from "@mui/styles";
import useWindowSize from "../../utils/size";
import { colors } from "../../utils/colors";
import { GETALLUSERS, LOGOUTUSER } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";
import { Menu } from "@styled-icons/open-iconic/Menu";
import styles from "../Title/title.module.scss";

export default function Navbar(): JSX.Element {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [show, setShow] = useState(false);

  const [auto, setAuto] = useState([]);

  const [userSearch, setUserSearch] = useState("");

  const { width } = useWindowSize();

  const allUsers: any = useSelector((state) => state);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value);
    setAuto(
      allUsers?.coolor?.allusers?.users.filter((item: any) =>
        item.full_name.toLowerCase().includes(userSearch.toLowerCase())
      )
    );
    if (e.target.value.length < 1) {
      setAuto([]);
    }
  };

  const handleLogOut = async () => {
    await dispatch(LOGOUTUSER());
    await toast.success("Come back soon!");
    setTimeout(() => (window.location.href = "https://coolormedia.netlify.app/"), 1000);
  };

  useEffect(() => {
    const getAllUsers = async () => {
      await dispatch(GETALLUSERS());
    };
    getAllUsers();
  }, [dispatch]);
  return (
    <Fragment>
      {!show ? (
        <div className={classes.divFixedButton}>
          <button
            type="button"
            onClick={() => setShow(true)}
            className={classes.buttonFixed}
          >
            <CloseCircle size={30} />
          </button>
        </div>
      ) : (
        <div className={classes.divFixedButton}>
          <button
            type="button"
            onClick={() => setShow(false)}
            className={classes.buttonFixed}
          >
            <Menu size={30} />
          </button>
        </div>
      )}
      <div className={show ? classes.none : classes.sideBar}>
        <div className={classes.divLogo}>
          <h1 className={styles.miniTitle}>CoolorMedia</h1>
        </div>
        <div className={classes.divSearch}>
          <input
            type="text"
            name="friends"
            onChange={handleInputChange}
            className={classes.input}
            value={userSearch}
            placeholder="Search for friends"
          />
          {auto.length === 0 ? null : (
            <Fragment>
              {auto &&
                auto.slice(0, 5).map((item: any, index: number) => (
                  <a
                    key={index}
                    className={classes.divAuto}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                    href={`https://coolormedia.netlify.app/profileOut?uuid=${item.uuid}`}
                  >
                    <p className={classes.auto}>{item.full_name}</p>
                  </a>
                ))}
            </Fragment>
          )}
          <div className={classes.containerLinks}>
            <Link className={classes.links} to="/Home">
              <button className={classes.button}>Home</button>
            </Link>
            <Link className={classes.links} to="/aboutMe">
              <button className={classes.button}>About Me</button>
            </Link>
            <Link className={classes.links} to="/Profile">
              <button className={classes.button}>Your Profile</button>
            </Link>
            <Link className={classes.links} to="/messages">
              <button className={classes.button}>Messages</button>
            </Link>
            <Link className={classes.links} to="/Friends">
              <button className={classes.button}>Friends</button>
            </Link>
            <Link className={classes.links} to="/news">
              <button className={classes.button}>News</button>
            </Link>
            <div className={classes.links}>
              <button
                type="button"
                onClick={handleLogOut}
                className={classes.button}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const useStyles = makeStyles({
  divFixedButton: {
    position: "fixed",
    top: "5%",
    right: "5%",
    zIndex: 10,
    "@media (max-width: 1280px)": {
      top: "2%",
    },
  },
  buttonFixed: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "4rem",
    height: "3rem",
    backgroundColor: `${colors.Yellow}`,
    fontFamily: ["Trispace", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "3vh",
    padding: "1rem",
    color: colors.Black,
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
  none: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    width: "25rem",
    height: "100%",
    flexDirection: "column",
    backgroundColor: `${colors.Blue}`,
    alignItems: "flex-start",
    borderRight: `solid 0.5rem ${colors.Black}`,
    justifyContent: "flex-start",
    animation: `$bounceOutLeft 1s`,
    zIndex: 5,
    transform: `translateX(-2000px);`,
    "@media (max-width: 1280px)": {
      width: "100%",
      border: "none",
      borderRadius: "0px",
    },
  },
  sideBar: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    width: "25rem",
    height: "100%",
    flexDirection: "column",
    backgroundColor: `${colors.Blue}`,
    alignItems: "flex-start",
    borderRight: `solid 0.5rem ${colors.Black}`,
    justifyContent: "flex-start",
    zIndex: 5,
    animation: `$bounceInLeft 1s`,
    "@media (max-width: 1280px)": {
      width: "100%",
      border: "none",
      borderRadius: "0px",
    },
  },
  divLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginTop: "2rem",
  },
  divSearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    marginTop: "2rem",
  },
  input: {
    width: "80%",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    marginBottom: "2rem",
  },
  divAuto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: `${colors.White}`,
    justifyContent: "center",
    position: "absolute",
    width: "80%",
    height: "fit-content",
    textDecoration: "none",
    top: "12rem",
    padding: "0.5rem",
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    zIndex: 10,
    "&:hover": {
      backgroundColor: `${colors.Turquoise}`,
    },
  },
  auto: {
    color: `${colors.Black}`,
    textDecoration: "none",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
  },
  containerLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
  },
  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    textDecoration: "none",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "4rem",
    backgroundColor: `${colors.Pink}`,
    fontFamily: ["Trispace", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "3vh",
    padding: "1rem",
    color: colors.White,
    borderBottom: `0.2rem solid ${colors.White}`,
    borderRadius: `0px`,
    border: `transparent`,
    transitionDuration: "0.5s",
    marginTop: "1rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: `${colors.Turquoise}`,
      color: colors.Black,
      borderBottom: `0.2rem solid ${colors.Black}`,

    },
  },
  "@keyframes bounceOutLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "20%": {
      opacity: 1,
      transform: "translateX(20px)",
    },
    "100%": {
      opacity: 0,
      transform: "translateX(-2000px)",
    },
  },
  "@keyframes bounceInLeft": {
    "0%": {
      opacity: 0,
      transform: "translateX(-2000px);",
    },
    "60%": {
      opacity: 1,
      transform: " translateX(30px);",
    },
    "80%": {
      transform: "translateX(-10px);",
    },
    "100%": {
      transform: "translateX(0);",
    },
  },
});

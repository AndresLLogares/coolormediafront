import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { GETUSER } from "../../redux/actions";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import axios from "axios";
import { Pen } from "@styled-icons/boxicons-regular/Pen";
import FormEducation from "./FormEducation";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";
import styles from "../Title/title.module.scss";
import { Institution } from "@styled-icons/boxicons-solid/Institution";
import { Certificate } from "@styled-icons/fluentui-system-filled/Certificate";
import { CalendarDateFill } from "@styled-icons/bootstrap/CalendarDateFill";

export default function Education(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [update, setUpdate] = useState(true);

  const [edit, setEdit] = useState(false);

  let user = useSelector((state: any) => state);

  let emailUser = localStorage.getItem("Email") || "";

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
    };
    getUser();
  }, [dispatch, emailUser]);

  const handleDeleteEducation = async (idToDelete: any) => {
    await axios
      .post(URL + "deleteeducation", {
        email: emailUser.toLowerCase(),
        id: idToDelete,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(GETUSER(emailUser));
        setUpdate(!update);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.divTitle}>
        <h3 className={styles.microTitles}>Education</h3>
      </div>
      <div className={classes.divButton}>
        <button
          type="button"
          onClick={() => {
            setEdit(!edit);
          }}
          className={classes.button}
        >
          <Pen />
        </button>
      </div>
      {edit ? (
        <FormEducation setEdit={setEdit} />
      ) : (
        <Fragment>
          <div className={classes.divSubtitle}>
            <p className={classes.label}>Your Education</p>
          </div>
          <div className={classes.divList}>
            {user?.coolor?.user?.education?.map(
              (education: any, index: any) => {
                return (
                  <div key={index} className={classes.divListItem}>
                    <div className={classes.divButtonDelete}>
                      <button
                        onClick={() => handleDeleteEducation(education.Id)}
                        className={classes.button}
                      >
                        <CloseCircle />
                      </button>
                    </div>
                    <p className={classes.information}>
                      <Institution className={classes.icons} />
                      Institute: {education.institute}
                    </p>
                    <p className={classes.information}>
                      <CalendarDateFill className={classes.icons} />
                      Date: ({education.startdate} / {education.enddate})
                    </p>

                    <p className={classes.information}>
                      <Certificate className={classes.icons} />
                      Degree: {education.degree}
                    </p>
                    <p className={classes.information}>
                      Description: {education.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "60%",
    backgroundColor: `${colors.Purple}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    transition: "5s",
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
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  divSubtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    display: "flex",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontWeight: "900",
    color: colors.Black,
    fontSize: "5vh",
    margin: "0",
    textShadow: `${colors.White} 2px 2px 0px, ${colors.White} 4px 4px 0px`,
  },
  divButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "Flex-end",
    width: "100%",
    marginRight: "2rem",
    "@media (max-width: 1280px)": {
      marginBottom: "1rem",
    },
  },
  button: {
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
  label: {
    display: "flex",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "5vh",
    margin: "0",
    marginBottom: "1rem",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "4vh",
    },
  },
  divList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    "@media (max-width: 1280px)": {
      width: "90%",
      flexDirection: "column",
    },
  },
  divListItem: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "start",
    flexDirection: "column",
    width: "60%",
    margin: "2rem",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    backgroundColor: colors.White,
    padding: "1rem",
    "@media (max-width: 1280px)": {
      margin: "0",
      marginBottom: "2rem",
      width: "90%",
    },
  },

  divButtonDelete: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    width: "100%",
  },
  information: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "fit-content",
    margin: "0",
    color: colors.Black,
    marginBottom: "1rem",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    fontWeight: "900",
    fontSize: "3vh",
    textOverflow: "ellipsis",
    overflow: "hidden",
    "@media (max-width: 1280px)": {
      fontSize: "2.5vh",
    },
  },
  icons: {
    width: "3rem",
    height: "auto",
    marginRight: "1rem",
    "@media (max-width: 1280px)": {
      width: "2rem",
      height: "auto",
      marginRight: "0.5rem",
    },
  },

});

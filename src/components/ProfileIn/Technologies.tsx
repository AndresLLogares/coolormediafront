import { useState, useEffect, SetStateAction } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { GETUSER } from "../../redux/actions";
import { listTechno } from "./listTechno";
import { URL } from "../../utils/url";
import { logos } from "./logos";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "../Title/title.module.scss";

export default function Technologies(props: any): JSX.Element {
  const classes = useStyles();

  const [techno, setTechno] = useState("Javascript");

  const dispatch = useDispatch();

  const [update, setUpdate] = useState(true);

  let user = useSelector((state: any) => state);

  let technologiesUser = user?.coolor?.user?.technologies;

  if (technologiesUser?.length > 0) {
    technologiesUser = logos(technologiesUser);
  }

  let emailUser = localStorage.getItem("Email");

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
    };
    getUser();
  }, [dispatch, emailUser]);

  const handleTechno = (event: {
    currentTarget: { value: SetStateAction<string> };
  }) => {
    setTechno(event.currentTarget.value);
  };

  const handleAddTechno = async () => {
    await axios
      .post(URL + "addtechno", {
        technologies: techno,
        email: emailUser,
      })
      .then((response: { data: { message: string } }) => {
        if (
          response.data.message === "You already have this technology added"
        ) {
          return toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          dispatch(GETUSER(emailUser));
          setUpdate(!update);
        }
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.divTitle}>
        <h3 className={styles.microTitles}>Technologies</h3>
      </div>
      <div className={classes.divSelected}>
        <p className={classes.label}>Select and add your technologies</p>
        <div className={classes.divSeparate}>
          <select onChange={handleTechno} className={classes.select}>
            {listTechno &&
              listTechno.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
          <button
            onClick={() => handleAddTechno()}
            type="button"
            className={classes.button}
          >
            Add Technology
          </button>
        </div>
      </div>
      <div className={classes.divSelected}>
        <p className={classes.label}>Your Technologies</p>
        <div className={classes.divWrapper}>
          {technologiesUser &&
            technologiesUser.map((item: any, index: number) => (
              <p key={index} className={classes.textTechno}>
                <item.logo className={classes.iconsTechno} />
                {item.name}
              </p>
            ))}
        </div>
      </div>
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
    width: "100%",
    backgroundColor: colors.Purple,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
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
  title: {
    display: "flex",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontWeight: "900",
    color: colors.Black,
    fontSize: "5vh",
    margin: "0",
    textShadow: `${colors.White} 2px 2px 0px, ${colors.White} 4px 4px 0px`,
  },
  divSelected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    marginBottom: "2rem",
  },
  divSeparate: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "row",
    width: "80%",
    "@media (max-width: 1280px)": {
      width: "90%",
      flexDirection: "column",
    },
  },
  select: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "30%",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    backgroundColor: colors.White,
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "100%",
      marginBottom: "1rem",
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
  button: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "20rem",
    height: "4rem",
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
      width: "100%",
    },
  },
  divWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 1280px)": {
      flexDirection: "column",
    },
  },
  textTechno: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "3vh",
    marginRight: "1rem",
    marginBottom: "1rem",
    padding: "0.5rem",
    backgroundColor: colors.White,
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "80%",
    },
  },
  iconsTechno: {
    color: colors.Black,
    width: "3rem",
  },
});

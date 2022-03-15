import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { logos } from "../ProfileIn/logos";
import styles from "../Title/title.module.scss";

export default function First(props: any): JSX.Element {
  const classes = useStyles();

  let technologiesUser = props?.user?.technologies;

  if (technologiesUser?.length > 0) {
    technologiesUser = logos(technologiesUser);
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.boxBackground}>
          {props?.user?.backPhoto ? (
            <img
              src={props?.user?.backPhoto}
              alt=""
              className={classes.backImage}
            />
          ) : (
            <p className={classes.textNone}>No background image</p>
          )}
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.separateColumns}>
          <div className={classes.firstColumn}>
            <div className={classes.boxProfilePhoto}>
              {props?.user?.profilePhoto ? (
                <img
                  src={props?.user?.profilePhoto}
                  alt=""
                  className={classes.profilePhoto}
                />
              ) : (
                <p className={classes.textNone}>No Photo</p>
              )}
            </div>
            <div className={classes.boxInformation}>
              <p className={classes.information}>{props?.user?.fullname}</p>
              <p className={classes.information}>{props?.user?.email}</p>
            </div>
          </div>
          <div className={classes.secondColumn}>
            <div className={classes.rootTechno}>
              <div className={classes.divTitle}>
                <h3 className={styles.microTitles}>Technologies</h3>
              </div>
              <div className={classes.divSelected}>
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
          </div>
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
    flexDirection: "column",
    paddingTop: "5rem",
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "80.5%",
    height: "fit-content",
    marginBottom: "5rem",
    "@media (max-width: 1280px)": {
      width: "90%",
      height: "auto",
    },
  },
  boxBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "24rem",
    backgroundColor: colors.Yellow,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "100%",
      height: "auto",
    },
  },
  backImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    objectFit: `contain`,
    objectPosition: `center`,
  },
  textNone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    fontSize: "5vh",
    fontWeight: 900,
    color: colors.Black,
  },
  sortButton: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "4rem",
    height: "3rem",
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
  separateColumns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "fit-content",
    "@media (max-width: 1280px)": {
      width: "100%",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
    },
  },
  firstColumn: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "30%",
    flexDirection: "column",
    "@media (max-width: 1280px)": {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  boxProfilePhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "15rem",
    height: "15rem",
    backgroundColor: colors.Yellow,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "80%",
      height: "auto",
      
    },
  },
  profilePhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    objectFit: `cover`,
    objectPosition: `center`,
  },
  boxInformation: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
    flexDirection: "column",
    backgroundColor: colors.Purple,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  information: {
    display: "flex",
    fontFamily: ["Dekko", "sans-serif"].join(","),
    color: colors.White,
    fontSize: "3vh",
    margin: "0",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  secondColumn: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "70%",
    "@media (max-width: 1280px)": {
      width: "100%",
      marginTop: "2rem",
    },
  },
  rootTechno: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.Purple,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    borderRadius: "5px",
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
  divSelected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    marginBottom: "2rem",
  },
  divWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 1280px)": {
      flexWrap: "nowrap",
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
      marginRight: "0",
    },
  },
  iconsTechno: {
    color: colors.Black,
    width: "3rem",
  },
});

import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { GETUSER } from "../../redux/actions";
import { URL } from "../../utils/url";
import toast from "react-hot-toast";
import axios from "axios";

export default function FormJobs(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  let emailUser = localStorage.getItem("Email") || "";

  const [current, setCurrent] = useState(false);

  const [update, setUpdate] = useState(false);

  const [information, setInformation] = useState({
    jobPosition: "",
    employmentType: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [description, setDescription] = useState("");

  let user = useSelector((state: any) => state);

  let jobsUser = user?.coolor?.user?.jobs;

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
    };
    getUser();
  }, [dispatch, emailUser]);

  const handleCurrent = () => {
    setCurrent(!current);
    const change = async () => {
      if (!current) {
        await setInformation({
          ...information,
          endDate: "Present",
        });
      }
    };
    change();
  };

  const handleSubmitJobs = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let id = 1;
    if (jobsUser.length !== 0) {
      let idArray = jobsUser?.map((item: { Id: any }) => item.Id);
      let max = Math.max.apply(null, idArray);
      id = max + 1;
    }
    await axios
      .post(URL + "addjobs", {
        email: emailUser.toLowerCase(),
        id: id,
        companyname: information.companyName,
        jobposition: information.jobPosition,
        startdate: information.startDate,
        enddate: information.endDate,
        description: description,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    await dispatch(GETUSER(emailUser));
    setUpdate(!update);
    props.setEdit(false);
  };

  return (
    <form onSubmit={handleSubmitJobs} className={classes.root}>
      <div className={classes.divTitle}>
        <h3 className={classes.title}>Edit your work experience</h3>
      </div>
      <div className={classes.divWrapper}>
        <div className={classes.divInput}>
          <label className={classes.label}>Company</label>
          <input
            className={classes.input}
            name="companyName"
            required={true}
            type="text"
            value={information.companyName}
            onChange={(event) => {
              setInformation({
                ...information,
                companyName: event.currentTarget.value,
              });
            }}
          />
        </div>
        <div className={classes.divInput}>
          <label className={classes.label}>Job Position</label>
          <input
            className={classes.input}
            name="jobposition"
            required={true}
            type="text"
            value={information.jobPosition}
            onChange={(event) => {
              setInformation({
                ...information,
                jobPosition: event.currentTarget.value,
              });
            }}
          />
        </div>
        <div className={classes.divInput}>
          <label className={classes.label}>Start Date</label>
          <input
            className={classes.input}
            name="startDate"
            required={true}
            type="date"
            value={information.startDate}
            onChange={(event) => {
              setInformation({
                ...information,
                startDate: event.currentTarget.value,
              });
            }}
          />
        </div>
        <div className={classes.divInput}>
          <label className={classes.label}>End Date</label>
          <input
            disabled={current}
            className={classes.input}
            name="endDate"
            required={false}
            type="date"
            value={information.endDate}
            onChange={(event) => {
              setInformation({
                ...information,
                endDate: event.currentTarget.value,
              });
            }}
          />
        </div>
        <div className={classes.divInputCheckbox}>
          <label className={classes.label}>I am currently working here</label>
          <input
            name="current"
            required={false}
            type="checkbox"
            checked={current}
            onChange={handleCurrent}
          />
        </div>
        <div className={classes.divInput}>
          <label className={classes.label}>Description</label>
          <textarea
            className={classes.textarea}
            name="description"
            required={true}
            value={description}
            onChange={(event) => {
              setDescription(event.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div className={classes.divButton}>
        <button className={classes.button} type="submit">
          Add Experience
        </button>
      </div>
    </form>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "80%",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  divTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
    marginBottom: "1rem",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  title: {
    display: "flex",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "4vh",
    margin: "0",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
    },
  },
  divWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    "@media (max-width: 1280px)": {
      flexDirection: "column",
    },
  },
  divInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem",
    width: "40%",
    "@media (max-width: 1280px)": {
      width: "90%",
      margin: "0rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
  divInputCheckbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "2rem",
    width: "40%",
    "@media (max-width: 1280px)": {
      width: "90%",
      margin: "0rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
  label: {
    display: "flex",
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    color: colors.Black,
    fontSize: "3vh",
    fontWeight: 900,
    "@media (max-width: 1280px)": {
      fontSize: "3vh",
      width: "90%",
    },
  },
  input: {
    width: "80%",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  textarea: {
    width: "80%",
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "5px",
    height: "10rem",
    border: `0.2rem solid ${colors.Black}`,
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
    resize: "none",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  divButton: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
    "@media (max-width: 1280px)": {
      marginTop: "1rem",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "5rem",
    backgroundColor: `${colors.Yellow}`,
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
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


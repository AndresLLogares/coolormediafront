import { useEffect, useState, lazy, Suspense } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import Title from "../Title/Title";
import Layout from "../Layout/index";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "../../utils/url";
import { AddUser } from "@styled-icons/entypo/AddUser";
import { v4 as uuidv4 } from "uuid";
import {
  GETUSERUUID,
  GETUSER,
  GETFRIENDSUUID,
  GETPOSTBYUUID,
} from "../../redux/actions";
import Loading from "../Loading";
const First = lazy(() => import("./FirtsIn"));
const Second = lazy(() => import("./SecondIn"));
const Third = lazy(() => import("./ThirdIn"));
const Fourth = lazy(() => import("./FourthIn"));

export default function ProfileOut(props: any): JSX.Element {
  const queryParams = new URLSearchParams(window.location.search);

  const [update, setUpdate] = useState(false);

  const UUID = queryParams.get("uuid") || "";

  let user = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const classes = useStyles();

  let emailUser = localStorage.getItem("Email") || "";

  let userByUUID = user?.coolor?.userUUID;

  let currentUser = user?.coolor?.user;

  useEffect(() => {
    const getUser = async () => {
      await dispatch(GETUSER(emailUser));
      await dispatch(GETFRIENDSUUID(UUID));
      await dispatch(GETPOSTBYUUID(UUID));
      await dispatch(GETUSERUUID(UUID));
    };
    getUser();
  }, [dispatch, emailUser, update]);

  const handleAddContact = async () => {
    await axios
      .post(URL + "addfriends", {
        uuid: uuidv4(),
        user: userByUUID?.email,
        emailfriend: currentUser?.email,
        namefriend: currentUser?.fullname,
        imagefriend: currentUser?.profilePhoto,
        useruuid: userByUUID?.uuid,
        frienduuid: currentUser?.UUID,
      })
      .then((response) => {
        toast.success(response.data.message);
      });
    await dispatch(GETUSER(emailUser));
    await dispatch(GETFRIENDSUUID(UUID));
    await dispatch(GETPOSTBYUUID(UUID));
    await dispatch(GETUSERUUID(UUID));
    setUpdate(!update);
  };

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <div className={classes.root}>
          <Title title={`${userByUUID.fullname}`} />
          {userByUUID.uuid !== currentUser?.UUID ? (
            <div className={classes.divButton}>
              <button
                type="button"
                className={classes.button}
                onClick={handleAddContact}
              >
                <AddUser className={classes.icon} />
                Add friend
              </button>
            </div>
          ) : null}
          <div className={classes.eachComponent}>
            <First user={userByUUID} />
          </div>
          <div className={classes.eachComponent}>
            <Second user={userByUUID} />
          </div>
          <div className={classes.eachComponent}>
            <Third user={userByUUID} />
          </div>
          <div className={classes.eachComponent}>
            <Fourth uuid={UUID} />
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
  divButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginTop: "5rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "5rem",
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
  icon: {
    width: "3rem",
    height: "3rem",
    color: colors.Black,
    marginRight: "1rem",
  },
});

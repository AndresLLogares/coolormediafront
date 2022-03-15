import axios from "axios";
import setToken from "../utils/setToken";
import URL from "../utils/url";  
export const SET_CURRENT_USER = "SETCURRENTUSER";
export const GET_NEWS = "GETNEWS";
export const GET_USER = "GETUSER";
export const GET_COUNTRIES = "GETCOUNTRIES";
export const GET_CITIES = "GETCITIES";
export const GET_POSTS = "GETPOSTS";
export const GET_POSTS_BY_USER = "GETPOSTSBYUSER";
export const GET_ALL_USERS = "GETALLUSERS";
export const GET_USER_UUID = "GETUSERUUID";
export const GET_FRIENDS = "GETFRIENDS";
export const GET_POST_BYUUID = "GETPOSTBYUUID";
export const GET_FRIENDS_BYUUID = "GETFRIENDSBYUUID";

export const GETFRIENDSUUID = (info:string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .post(URL + "getfriendsuuid", {
        uuid: info,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_FRIENDS_BYUUID, payload: data });
      });
  };
};

export const GETPOSTBYUUID = (info:string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .post(URL + "getpostbyuuid", {
        useruuid: info,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_POST_BYUUID, payload: data });
      });
  };
};

export const GETFRIENDS = (info:string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .post(URL + "getfriends", {
        user: info,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_FRIENDS, payload: data });
      });
  };
};

export const GETUSERUUID = (info:string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .post(URL + "getuserbyuuid", {
        uuid: info,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_USER_UUID, payload: data });
      });
  };
};

export const GETALLUSERS = () => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .get(URL + "getallusers")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_ALL_USERS, payload: data });
      });
  };
};

export const GETPOSTBYUSER = (info:string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .post(URL + "getpostbyuser", {
        email: info,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_POSTS_BY_USER, payload: data });
      });
  };
};

export const GETPOSTS = () => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    return await axios
      .get(URL + "getposts")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_POSTS, payload: data });
      });
  };
};

export const GETCOUNTRIES = (info:string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .get(`https://restcountries.eu/rest/v2/region/${info}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_COUNTRIES, payload: data });
      });
  };
};


export const GETUSER = (info:string | null) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        return await axios
      .post(URL + "getuser", {
        email: info,
      })
      .then((response) => response.data)
      .then(async (data) => {
        await dispatch({ type: GET_USER, payload: data });
      });
  };
};

export const SETCURRENTUSER = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const LOGOUTUSER = () => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        await localStorage.removeItem("jwtToken");
    await localStorage.removeItem("UserName");
    await localStorage.removeItem("Email");
    setToken(false);
    dispatch(SETCURRENTUSER(''));
  };
};

export const GETNEWS = () => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    return await axios
      .get("https://saurav.tech/NewsAPI/everything/cnn.json")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_NEWS, payload: data });
      });
  };
};
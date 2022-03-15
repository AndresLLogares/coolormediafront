import setToken from "../../utils/setToken";

export const loginHook = async (token, firstname, email) => {
  await localStorage.setItem("jwtToken", token);
  await localStorage.setItem("UserName", firstname);
  await localStorage.setItem("Email", email);
};

export const logoutHook = async () => {
  await localStorage.removeItem("jwtToken");
  await localStorage.removeItem("UserName");
  await localStorage.removeItem("Email");
  setToken(false);
};

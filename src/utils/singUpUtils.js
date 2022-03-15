export const calculateAge = (dob) => {
  let difference = Date.now() - dob.getTime();
  let age = new Date(difference);

  return Math.abs(age.getUTCFullYear() - 1970);
};

export const changeMonth = (month) => {
  if (month === "Jan") {
    month = 1;
    return month;
  } else if (month === "Feb") {
    month = 2;
    return month;
  } else if (month === "Mar") {
    month = 3;
    return month;
  } else if (month === "Apr") {
    month = 4;
    return month;
  } else if (month === "May") {
    month = 5;
    return month;
  } else if (month === "Jun") {
    month = 6;
    return month;
  } else if (month === "Jul") {
    month = 7;
    return month;
  } else if (month === "Aug") {
    month = 8;
    return month;
  } else if (month === "Sep") {
    month = 9;
    return month;
  } else if (month === "Oct") {
    month = 10;
    return month;
  } else if (month === "Nov") {
    month = 11;
    return month;
  } else if (month === "Dec") {
    month = 12;
    return month;
  }
};

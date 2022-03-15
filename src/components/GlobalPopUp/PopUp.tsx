import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";

export default function GlobalPopUp(props: any): JSX.Element {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      position: "fixed",
      top: `${props.top}`,
      left: `${props.left}`,
      width: `${props.width}`,
      height: `${props.height}`,
      backgroundColor: `${props.backgroundColor}`,
      fontFamily: ["Trispace", "sans-serif"].join(","),
      fontWeight: "900",
      fontSize: "3vh",
      padding: "1rem",
      border: `solid ${colors.Black}`,
      borderWidth: "3px 4px 3px 5px",
      borderRadius: "95% 4% 92% 5%/4% 95% 6% 95%",
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
      "@media (max-width: 1280px)": {
        top: `${props.topMobile}`,
        width: `${props.widthMobile}`,
        left: `${props.leftMobile}`,
        height: `${props.heightMobile}`,
        fontSize: "3vh",
      },
    },
  });

  const classes = useStyles();

  return <div className={classes.root}> {props.children} </div>;
}

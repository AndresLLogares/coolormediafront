import { Fragment } from "react";
import Navbar from "../Navbar/index";
import { Toaster } from "react-hot-toast";
export default function Layout(props: any): JSX.Element {
  return (
    <Fragment>
      <Toaster />
      <Navbar />
      {props.children}
    </Fragment>
  );
}

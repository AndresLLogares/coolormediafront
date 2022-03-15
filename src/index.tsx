import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./utils/scrollToTop";
import Loading from "./components/Loading";
const Landpage = lazy(() => import("./components/Landpage"));
const Home = lazy(() => import("./components/Home"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Profile = lazy(() => import("./components/ProfileIn"));
const ProfileOut = lazy(() => import("./components/ProfileOut"));
const Friends = lazy(() => import("./components/Friends"));
const Messages = lazy(() => import("./components/Messages"));
const News = lazy(() => import("./components/News"));
const Reset = lazy(() => import("./components/Login/Reset"));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Scroll />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileOut" element={<ProfileOut />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

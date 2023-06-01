import { Outlet, Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;

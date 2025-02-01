import Header from "../Header";
import { Outlet } from "react-router-dom";
import { OutletContainer } from "./styles";

const Layout = () => {
  return (
    <>
      <Header />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default Layout;

import Header from "../Header";
import { Outlet } from "react-router-dom";
import athens from "../../assets/images/athens.jpg";
import { AthensImg, OutletContainer } from "./styles";

const Layout = () => {
  return (
    <>
      <Header />
      <AthensImg src={athens} />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default Layout;

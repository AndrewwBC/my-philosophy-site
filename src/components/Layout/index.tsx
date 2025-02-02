import Header from "../Header";
import { Outlet } from "react-router-dom";
import { OutletContainer } from "./styles";

const Layout = () => {
  return (
    <>
      <Header />

      <OutletContainer>
        <div className="content">
          <Outlet />
        </div>
      </OutletContainer>
    </>
  );
};

export default Layout;

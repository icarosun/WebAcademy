import { Outlet } from "react-router-dom";
import CustomNavBar from "../../componentes/CustomNavBar";
import ModalInfoMovie from "../../componentes/ModalInfoMovie";

export default function NavBarLayout() {
  return (
    <div style = {{height: "100vh", width: "100vw"}}>
      <CustomNavBar/>
      <Outlet />
      <ModalInfoMovie />
    </div>
  );
}

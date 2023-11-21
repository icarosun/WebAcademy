import { Outlet } from "react-router-dom";
import CustomNavBar from "../../componentes/CustomNavBar";
import { Container } from "react-bootstrap";

export default function NavBarLayout() {
  return (
    <Container fluid>
      <CustomNavBar/>
      <Outlet />
    </Container>
  );
}

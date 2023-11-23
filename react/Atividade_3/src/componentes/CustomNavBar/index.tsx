import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CustomNavBar() {

  return (
    <Navbar expand = "xl" bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className = "navbar-brand" to = "/">
          NetFilm da WebAcademy
        </NavLink>
        <Nav 
          className = "me-auto"
        >
          <NavLink
            className = "nav-link"
            to = "/favorites"
          >Favorite Movies</NavLink>

          <NavLink
            className = "nav-link"
            to = "/recommendations"
          >Recomendações</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

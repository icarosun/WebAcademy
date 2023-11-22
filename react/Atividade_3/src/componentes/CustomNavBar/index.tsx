import { Container, Nav, Navbar } from "react-bootstrap";

export default function CustomNavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href = "/">
          NetFilm da WebAcademy
        </Navbar.Brand>
        <Nav 
          className = "me-auto"
        >
          <Nav.Link href = "/recommendations" eventKey={"/recommendations"}>Recomendações</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

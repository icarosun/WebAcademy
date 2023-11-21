import { Container, Nav, Navbar } from "react-bootstrap";

export default function CustomNavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href = "/">
          Home
        </Navbar.Brand>
        <Nav className = "me-auto">
          <Nav.Link href = "/recommendations">Recomendações</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

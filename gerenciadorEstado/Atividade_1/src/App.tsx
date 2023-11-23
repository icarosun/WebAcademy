import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ListToDo, { views } from "./Pages/ListToDo";
import { Container, Nav } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [viewContent, SetViewContent] = useState<views>("all");

  return (
    <Container>
      <h1 style = {{textAlign: "center"}}>React Todo App</h1>
      <Nav 
        className = "mb-2"
        variant = "tabs" 
        defaultActiveKey={viewContent}
        onSelect = {(selectedKey) => SetViewContent(selectedKey as views)}
      >
        <Nav.Item>
          <Nav.Link eventKey = "all" >All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="completed">Completed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey = "incompleted">Incompleted</Nav.Link>
        </Nav.Item>
      </Nav>

      <ListToDo viewContent = {viewContent}/>
    </Container>
  );
}

export default App

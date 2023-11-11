import "./App.css";

import Quadrado from "./componentes/area/Quadrado/index";
import Trapezio from "./componentes/area/Trapezio/index";
import Triangulo from "./componentes/area/Triangulo/index";
import ParOuImpar from "./componentes/ParOuImpar/index";
import Primo from "./componentes/Primo/index";

function App() {
  return (
    <div>
      <section>
        <h1>Calcular área</h1>
        <Triangulo />
        <Quadrado />
        <Trapezio />
      </section>
      <section>
        <h1>Verificar número</h1>
        <ParOuImpar />
        <Primo />
      </section>
    </div>
  );
}

export default App;

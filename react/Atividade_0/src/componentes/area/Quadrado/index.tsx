import { useState } from "react";

export default function Quadrado() {
  const [lado, SetLado] = useState(0);

  function AreaQuadrado() {
    window.alert(`Área do Quadrado= ${lado * lado}`);
  }

  return (
    <fieldset>
      <legend>Área do Quadrado</legend>
      <input
        placeholder="Tamanho do lado (l)"
        type = "number"
        onChange={(e) => SetLado(parseFloat(e.target.value))}
      />
      <button onClick={() => AreaQuadrado()}>Calcular</button>
    </fieldset>
  );
}

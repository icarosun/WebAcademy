import { useState } from "react";

export default function Triangulo() {
  const [base, SetBase] = useState(0);
  const [altura, SetAltura] = useState(0);

  function AreaTriangulo() {
    const areaTriangulo = (base * altura) / 2;

    window.alert(`Área do Triângulo= ${areaTriangulo}`);
  }

  return (
    <fieldset>
      <legend>Área do Triângulo </legend>

      <input
        type="number"
        placeholder="Base do triângulo (b)"
        onChange={(e) => SetBase(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Altura do triângulo (h)"
        onChange={(e) => SetAltura(parseFloat(e.target.value))}
      />

      <button onClick={() => AreaTriangulo()}>Calcular</button>
    </fieldset>
  );
}

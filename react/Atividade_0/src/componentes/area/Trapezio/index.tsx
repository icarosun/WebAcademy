import { useState } from "react";

export default function Trapezio() {
  const [baseMenor, SetBaseMenor] = useState(0);
  const [baseMaior, SetBaseMaior] = useState(0);
  const [altura, SetAltura] = useState(0);

  function AreaTrapezio() {
    const areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

    window.alert(`Área do Trapézio= ${areaTrapezio}`);
  }

  return (
    <fieldset>
    <legend>Área do Trapézio </legend>

      <input
        type="number"
        placeholder="Base Maior (B)"
        onChange={(e) => SetBaseMaior(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Base Menor (b)"
        onChange={(e) => SetBaseMenor(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Altura (h)"
        onChange={(e) => SetAltura(parseFloat(e.target.value))}
      />

      <button onClick={() => AreaTrapezio()}>Calcular</button>
    </fieldset>
  );
}

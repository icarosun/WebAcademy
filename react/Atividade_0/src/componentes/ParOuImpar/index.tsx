import { useState } from "react";

export default function ParOuImpar() {
  const [n1, SetN1] = useState(0);

  function NumParOuImpar() {
    if (n1 % 2 === 0) {
      window.alert(`O número ${n1} é par.`);
    } else {
      window.alert(`O número ${n1} é ímpar.`);
    }
  }

  return (
    <fieldset>
      <legend>É Par ou Ímpar?</legend>
      <input
        placeholder="Insira um número"
        type = "number"
        onChange={(e) => SetN1(parseInt(e.target.value))}
      />

      <button onClick={() => NumParOuImpar()}>Verificar</button>
    </fieldset>
  );
}

import { useState } from "react";

export default function Primo() {
  const [n1, SetN1] = useState(0);

  function Primo() {
    const raiz = Math.sqrt(n1);
    let primo = true;

    let i = 2;

    while (i <= raiz) {
      if (n1 % i === 0) {
        primo = false;
        i = raiz + 1;
      }

      i++;
    }

    if (primo) {
      window.alert(`O número ${n1} é primo`);
    } else {
      window.alert(`O número ${n1} não é primo`);
    }
  }

  return (
    <fieldset>
      <legend>É Primo?</legend>
      <input
        placeholder="Insira um número"
        type = "number"
        onChange={(e) => SetN1(parseInt(e.target.value))}
      />

      <button onClick={() => Primo()}>Verificar</button>
    </fieldset>
  );
}

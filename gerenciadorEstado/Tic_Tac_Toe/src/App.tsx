import './App.css'

function App() {
  const matriz: Array<string>[] = [
    ['O', 'O', 'O'],
    [" ", 'X', " "], 
    [" ", 'X', " "]
  ];

  return (
    <div className = "App">
      {matriz.map((linha, linhaIndex) => {
        return (
          <button key = {linhaIndex} className="square">
            {linha.map((celula, celulaIndex) => {
              return(<span style={{cursor: "pointer"}} key={celulaIndex} onClick={() => console.log(linhaIndex, celulaIndex)}>{celula}</span>);
            })}
          </button>
        )
      })}
    </div>
  );
}

export default App

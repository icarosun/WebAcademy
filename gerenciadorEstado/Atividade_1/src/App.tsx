import { useDispatch, useSelector } from 'react-redux';
import './App.css'

function App() {
  const listTask = useSelector((state: any) => state.task);

  return (
    <div className= "App">
      <h2>Tasks:</h2>
      <ul>
        {listTask.tasks.map((task: any, index: any) => (
          <li key = {index}>
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

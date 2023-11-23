import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AllTask from "./Componentes/AllTask";
import TaskCompleted from "./Componentes/TaskCompleted";
import TaskIncompleted from "./Componentes/TaskIncompleted";

export type views = "all" | "completed" | "incompleted";

interface ListToDoProps {
  viewContent: views;
}
export default function ListToDo(props: ListToDoProps) {
  const listTask = useSelector((state: RootState) => state.task);
  let content; 
  
  if (listTask.tasks.length > 0) {
      switch(props.viewContent) {
        case "all":
          content = <AllTask /> 
          break; 
        case "completed":
          content = <TaskCompleted />;
          break;
        case "incompleted":
          content = <TaskIncompleted />; 
          break;
        default:
          content = <h1>Sorry, tab inexistent!</h1>;
      } 
    } else {
      content = <AllTask />;
    }

  return (
    <>
      {content}
    </>
  ); 
}

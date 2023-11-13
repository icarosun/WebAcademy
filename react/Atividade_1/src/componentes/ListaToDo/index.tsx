import { ChangeEvent, useRef, useState } from "react";
import CustomTable, { TableColumn } from "../Tabela";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import ToastDo from "../ToastDo";

interface ITask {
  id: string;
  task: string;
}

export default function ListaToDo() {
  const [isShowToastDo, SetIsShowToastDo] = useState<boolean>(false);  
  const [toDos, SetToDoS] = useState<ITask[]>([]);
  const [taskName, SetTaskName] = useState<string>("");
 
  const taskToDo = useRef<ITask>();

  function DeleteTask(obj: ITask) {
    SetToDoS(
      toDos.filter((task) => task.id !== obj.id)
    );
  } 

  function DoTask(obj: ITask) {
    taskToDo.current = obj; 
    SetIsShowToastDo(true);
    DeleteTask(obj);
  }

  const columnsToDos: TableColumn<ITask>[] = [
    {head: "Atividade" , acessor: "task"},
    {head: "Delete", isActionButton: true, onActionClick: (obj) => {
      DeleteTask(obj);
    }
    },
    {head: "Do", isActionButton: true, onActionClick: (obj) => {
      DoTask(obj);
    }}
  ];

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskName.trim().length > 0) {

      const newTask: ITask = {
        id: uuidv4(),
        task: taskName,
      };
  
      SetToDoS([...toDos, newTask]);
    }
    SetTaskName("");
  }
 
  return(
    <div>
      <Form className = "mt-5" onSubmit={handleChange}>
        <InputGroup className="mb-3">
         <Form.Control
           placeholder="Task"
           required
           value = {taskName}
           onChange = {(e) => {SetTaskName(e.target.value)}}
         />
           <Button variant="primary" type = "submit"> 
             Add
         </Button>
       </InputGroup>
      </Form>

     <CustomTable data = {toDos} columns={columnsToDos}/>
    
      <ToastDo isShow = {isShowToastDo} onClose = {() => SetIsShowToastDo(false)} 
      titleTask={taskToDo.current?.task ? taskToDo.current?.task : ""} />

    </div>
  );
}

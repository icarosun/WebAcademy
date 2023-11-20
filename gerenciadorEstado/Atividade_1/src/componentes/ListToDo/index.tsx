import { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Task, addTask, finishedTask, removeTask } from '../../redux/slices/task.slice';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function ListToDo() {
  const listTask = useSelector((state: any) => state.task);
  const [taskName, SetTaskName] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (taskName.trim().length > 0) {
      const newTask: Task = {
        id: uuidv4(),
        finished: false,
        title: taskName
      }

      dispatch(addTask(newTask));
    }

    SetTaskName("");
  }

  return (
    <>
      <h1 style = {{textAlign: "center"}}>React Todo App</h1>

      <Form className = "mt-3" onSubmit={handleChange}>
        <InputGroup className="mb-3">
          <Form.Control
           placeholder="Digit a task"
           required
           value = {taskName}
           onChange = {(e) => {SetTaskName(e.target.value)}}
          />
          <Button variant="success" type = "submit"> 
           Add
          </Button>
        </InputGroup>
      </Form>

      <ul className='list-group'>
        {listTask.tasks.map((task: any, index: any) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key = {index}>
            {task.finished ? (
              <label className = "form-check-label"><s>{task.title}</s></label>
            ) : (
              <>
                <div> 
                  <input className = "form-check-input me-1" type = "checkbox" id={task.id} onClick={() => dispatch(finishedTask(task))}/>
                  <label className = "form-check-label" htmlFor = {task.id} >{task.title}</label>
                </div>
                <Button className="btn btn-light text-danger" onClick= {() => dispatch(removeTask(task))}>x</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

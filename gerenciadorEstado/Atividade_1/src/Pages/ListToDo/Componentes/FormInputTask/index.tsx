import { ChangeEvent, useState } from "react";
import { Task, addTask } from "../../../../redux/slices/task.slice";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function FormInputTask() {
  const [taskName, SetTaskName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (taskName.trim().length > 0) {
      const newtask: Task = {
        id: uuidv4(),
        finished: false, 
        title: taskName
      }

      dispatch(addTask(newtask));
    }

    SetTaskName("");
  }

  return (
    <Form className = "mt-3" onSubmit={handleAddTask}>
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
  );
}

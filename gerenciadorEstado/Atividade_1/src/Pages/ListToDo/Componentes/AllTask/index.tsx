import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { finishedTask, removeTask } from "../../../../redux/slices/task.slice";
import { Button, ListGroup } from "react-bootstrap";
import FormInputTask from "../FormInputTask";

export default function AllTask() {
  const listTask = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <>
      <FormInputTask />    
      <ListGroup className='list-group'>
        {listTask.tasks.map((task, index) => (
          task.finished ? (
            <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center" key = {index} disabled> 
              <label className = "form-check-label"><s>{task.title}</s></label>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center" key = {index}> 
                <div> 
                  <input className = "form-check-input me-1" type = "checkbox" id={task.id} onClick={() => dispatch(finishedTask(task))}/>
                  <label className = "form-check-label" htmlFor = {task.id} >{task.title}</label>
                </div>
                <Button className="btn btn-light text-danger" onClick= {() => dispatch(removeTask(task))}>x</Button>
            </ListGroup.Item>
          )))
        }
      </ListGroup>
    </>
  );
}

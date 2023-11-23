import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { Button, ListGroup } from "react-bootstrap";
import FormInputTask from "../FormInputTask";
import { finishedTask, removeTask } from "../../../../redux/slices/task.slice";

export default function TaskIncompleted() {
  const { tasks } = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch<AppDispatch>();
  let listTaskCompleted;

  if (tasks.length > 0) {
    listTaskCompleted = tasks
      .filter((task) => !task.finished)
  }

  return (
    <>
      <FormInputTask />
      <ListGroup className='list-group mt-3'>
        {listTaskCompleted?.map((task, index) => (
          <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center" key = {index}> 
            <div> 
              <input className = "form-check-input me-1" type = "checkbox" id={task.id} onClick={() => dispatch(finishedTask(task))}/>
              <label className = "form-check-label" htmlFor = {task.id} >{task.title}</label>
            </div>
            <Button className="btn btn-light text-danger" onClick= {() => dispatch(removeTask(task))}>x</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { ListGroup } from "react-bootstrap";

export default function TaskCompleted() {
  const { tasks } = useSelector((state: RootState) => state.task);
  let listTaskCompleted;

  function handleChangeDateToView(dateFinished?: string) {
    let date = null; 

    if (dateFinished) {
      date = new Date(dateFinished);

      return `${date.toLocaleDateString("BR")} ${date.toLocaleTimeString()}`;
    }
    
    return "00/00/0000 00:00:00";
  }

  if (tasks.length > 0) {
    listTaskCompleted = tasks
      .filter((task) => task.finished)
      .sort((a, b) => a.dateFinished! > b.dateFinished! ? 1 : -1)
  }

  return (
    <>
      <ListGroup className='list-group mt-3'>
        <ListGroup.Item active className="list-group-item d-flex justify-content-between align-items-center"  as = "li">
          <label>Task</label>
          <label>Date - Hour</label>
        </ListGroup.Item>
        {listTaskCompleted?.map((task, index) => (
          <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center" key = {index}>
            <label>{task.title}</label>
            <label>{handleChangeDateToView(task.dateFinished)}</label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

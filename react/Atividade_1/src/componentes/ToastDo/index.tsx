import { Toast, ToastContainer } from "react-bootstrap";

interface ToastDoProps {
  isShow: boolean;
  onClose: () => void;
  titleTask: string;
}


export default function ToastDo(props: ToastDoProps) {
  return (
    <ToastContainer position = "top-end" className="p-3" style={{ zIndex : 1}}>
    <Toast onClose={props.onClose} show={props.isShow} delay={3000} autohide bg = "success">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Task: {props.titleTask}</strong>
            <small>1 second ago</small>
          </Toast.Header>
          <Toast.Body className = "text-white">Woohoo, you finish a task. Keep going!</Toast.Body>
        </Toast>
    </ToastContainer>
  );
} 

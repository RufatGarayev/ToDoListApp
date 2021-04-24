import { TasksContext } from '../contexts/TasksContext';
import { useContext, useState, useEffect } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditTask from './EditTask';


const Task = ({ task, checkComplete }) => {

    const { deleteTask } = useContext(TasksContext);
    const id = task.id;

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [task])


    return (
        <>
            <li className="li-item d-flex justify-content-between">
                <label htmlFor={id} className={task.complete ? "active" : ""}>
                    <input type="checkbox"
                        id={id}
                        checked={task.complete}
                        onChange={() => checkComplete(id)}
                    />
                    {task.title}
                </label>

                <div className="right-btns">
                    {/* === edit-btn === */}
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                Edit
                            </Tooltip>
                        }
                    >
                        <button type="button" className="edit-btn btns" onClick={handleShow} disabled={task.complete}>
                            <i className={task.complete ? "fas fa-pen disabled-btn" : "fas fa-pen"}></i>
                        </button>
                    </OverlayTrigger>

                    {/* === delete-btn === */}
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                Delete
                            </Tooltip>
                        }
                    >
                        <button type="button" onClick={() => deleteTask(id)} className="delete-btn btns ml-3">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </OverlayTrigger>
                </div>
            </li>

            {/* === modal === */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <EditTask theTask={task} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="danger" size="sm">Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default Task;
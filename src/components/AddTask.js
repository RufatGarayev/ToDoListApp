import { useContext, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { Modal, Button } from 'react-bootstrap';


const AddTask = () => {

    const { addTask } = useContext(TasksContext);
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            handleShow();
        } else {
            addTask(title);
        }

        setTitle("");
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper d-flex">
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Add Task..."
                            spellCheck="false"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Add" className="btn add-btn" />
                </div>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h5 className="text-center">Please write a Task name.</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="primary" size="sm">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default AddTask;
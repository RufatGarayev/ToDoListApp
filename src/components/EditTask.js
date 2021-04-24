import React, { useContext, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';


const EditTask = ({ theTask }) => {

    const { editTask } = useContext(TasksContext);
    const task = theTask;
    const id = task.id;
    const [title, setTitle] = useState(task.title);
    const editedTask = { id, title };

    const handleSubmit = (e) => {
        e.preventDefault();

        editTask(id, editedTask);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-wrapper d-flex px-1 py-3">
                <div className="form-group mb-0">
                    <input type="text"
                        className="form-control edit-input"
                        spellCheck="false"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <input type="submit" value="Edit" className="btn edit-btn" />
            </div>
        </form>
    )
}


export default EditTask;
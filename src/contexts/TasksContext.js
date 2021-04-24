import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TasksContext = createContext();


const TasksContextProvider = (props) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        setTasks(JSON.parse(tasks));
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })


    // Add Task
    const addTask = (title) => {
        setTasks([...tasks, {id: uuidv4(), title, complete: false}]);
    }

    // Edit Task
    const editTask = (id, editedTask) => {
        setTasks(tasks.map((task) => (task.id === id ? editedTask : task)))
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }


    return (
        <TasksContext.Provider value={{ tasks, setTasks, addTask, editTask, deleteTask }}>
            {props.children}
        </TasksContext.Provider>
    )
}


export default TasksContextProvider;
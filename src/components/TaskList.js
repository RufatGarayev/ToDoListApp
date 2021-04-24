import { TasksContext } from '../contexts/TasksContext';
import { useContext } from "react";
import Task from './Task';


const TaskList = () => {

    const { tasks, setTasks } = useContext(TasksContext);

    const changeComplete = (id) => {
        const newTasks = [...tasks];

        newTasks.forEach((task) => {
            if (task.id === id) {
                task.complete = !task.complete
            }
        });
        setTasks(newTasks);
    }


    return (
        <div className="tasks-holder">
            {
                tasks.length ? (
                    <ul className="list-group">
                        {
                            tasks.map((task) => (
                                <Task task={task} key={task.id} checkComplete={changeComplete} />
                            ))
                        }
                    </ul>
                ) : (
                    <div className="text-center pt-5 text-light font-italic">No Tasks</div>
                )
            }
        </div>
    )
}


export default TaskList;
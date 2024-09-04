import React, { useState, useEffect } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import TaskDetails from './TaskDetails';  

function TaskList({ tasks, toggleTaskCompletion, deleteTask, gridView, mode }) {
    const [starredTasks, setStarredTasks] = useState(() => {
        const savedStars = localStorage.getItem('starredTasks');
        return savedStars ? JSON.parse(savedStars) : {};
    });

    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        localStorage.setItem('starredTasks', JSON.stringify(starredTasks));
    }, [starredTasks]);

    const toggleStar = (taskId) => {
        setStarredTasks((prevStarredTasks) => ({
            ...prevStarredTasks,
            [taskId]: !prevStarredTasks[taskId],
        }));
    };

    const closeDetail = () => {
        setSelectedTask(null); 
    };

    return (
        <div className="task-list">
            <h3>To Do</h3>
            <ul className={gridView ? 'grid-view' : 'list-view'}>
                {tasks.filter(task => !task.completed).map(task => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleTaskCompletion(task.id)} 
                        />
                        <span onClick={() => setSelectedTask(task)}> 
                            {task.text}
                        </span>
                        <button onClick={() => toggleStar(task.id)}>
                            {starredTasks[task.id] ? <FaStar className={mode === "light" ? "" : "blackii"} /> : <CiStar className={mode === "light" ? "" : "blackii"} />}
                        </button>
                    </li>
                ))}
            </ul>

            <h4>Completed</h4>
            <ul className="list-view"> 
                {tasks.filter(task => task.completed).map(task => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleTaskCompletion(task.id)} 
                        />
                        <span onClick={() => setSelectedTask(task)}> 
                            {task.text}
                        </span>
                        <button onClick={() => toggleStar(task.id)}>
                            {starredTasks[task.id] ? <FaStar className={mode === "light" ? "" : "blackii"} /> : <CiStar className={mode === "light" ? "" : "blackii"} />}
                        </button>
                    </li>
                ))}
            </ul>

            
            {selectedTask && (
                <TaskDetails
                    task={selectedTask}
                    closeDetail={closeDetail}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                    setSelectedTask={setSelectedTask}
                    mode={mode}
                />
            )}
        </div>
    );
}

export default TaskList;

import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TaskDetails({ task, closeDetail, toggleTaskCompletion, deleteTask, mode }) {
    const [dueDate, setDueDate] = useState(null);  
    const [showDatePicker, setShowDatePicker] = useState(false);  

    const handleDelete = () => {
        deleteTask(task.id);
        closeDetail();  
    };

    const handleDateChange = (date) => {
        setDueDate(date); 
        setShowDatePicker(false); 
    };

    const toggleDatePicker = () => {
        setShowDatePicker(prevState => !prevState);  
    };

    return (
        <div className={mode === "light" ? "task-detail" : "task-detail blackk"}>
            <div className="task-header">
                <div className="task-title">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <span>{task.text}</span>
                </div>
                <div className="task-actions">
                    <button onClick={handleDelete}><FaTrashAlt /></button>
                </div>
            </div>

            <div className="task-options">
                <div>Add Step</div>
                <div>Set Reminder</div>

              
                <div onClick={toggleDatePicker}>
                    Add Due Date
                    {showDatePicker && (
                        <DatePicker
                            selected={dueDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                            inline
                            className={mode === "light" ? "light-datepicker" : "dark-datepicker"}
                        />
                    )}
                </div>

                <div>Repeat</div>
                <div>Add Notes</div>
            </div>

            <div className="task-footer">
                <span>Created Today</span>
                <button onClick={closeDetail}>Close</button>
            </div>
        </div>
    );
}

export default TaskDetails;

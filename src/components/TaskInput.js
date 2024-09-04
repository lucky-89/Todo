import React, { useState } from 'react';
import { CiBellOn } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";

function TaskInput({ addTask, toggleGridView }) {
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue(''); 
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="task-input">
            <div className='task_input'>
                <input 
                    type="text" 
                    placeholder="Add a new task..." 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyPress={handleKeyPress} 
                />
                <CiBellOn className='input_icon'/>
                <HiArrowPathRoundedSquare className='input_icon' onClick={toggleGridView} />
                <CiCalendar className='input_icon'/>
                <button className='button' onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default TaskInput;

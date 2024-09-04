import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Header from './components/Header';
import './App.css';

function App() {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, text: 'Buy groceries', completed: false },
            { id: 2, text: 'Finish project report', completed: false },
            { id: 3, text: 'Call the bank', completed: false }
        ];
    });

    const [mode, setMode] = useState("light");
    const [side, setSide] = useState(false);
    const [gridView, setGridView] = useState(false);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        document.body.className = mode === "light" ? "light-mode" : "dark-mode";
    }, [mode]);

    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    const toggleTaskCompletion = (id) => {
        setTasks(
            tasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleGridView = () => {
        setGridView(!gridView);
    };

    return (
        <div className="app">
            <Header mode={mode} setMode={setMode} side={side} setSide={setSide} />
            <div className="main-content">
                <Sidebar mode={mode} totalTasks={totalTasks} completedTasks={completedTasks} side={side} />
                <div className="task-section">
                    <TaskInput addTask={addTask} toggleGridView={toggleGridView} />
                    <TaskList mode={mode} tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} gridView={gridView} />
                </div>
            </div>
        </div>
    );
}

export default App;

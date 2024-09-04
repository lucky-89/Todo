import React, { useState } from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { CgToday } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { RiBookOpenLine } from "react-icons/ri";
import { FaBuildingUser } from "react-icons/fa6";


const Sidebar = ({ totalTasks, completedTasks, mode, side }) => {
    const percentageCompleted = (completedTasks / totalTasks) * 100;

    const [imgClick, setImgClick] = useState(false);

    return (
        <div className={`sidebar ${side ? "disabled" : ""} ${mode}`}>
            <div className={mode === "light" ? 'clr' : "clr blackk"}>
                <div className="profile">
                    <img
                        src="https://wallpapercave.com/wp/wp4096582.jpg"
                        alt="Profile"
                        onClick={() => setImgClick(!imgClick)}
                    />
                    <div className={`${imgClick ? "display" : "disabled"} ${mode === "light" ? "" : "blackk"}`}>
                        <p>My Profile</p>
                        <div className="line"></div>
                        <p>Log Out</p>
                    </div>
                    <h4>Hey, ABCD</h4>
                </div>
                <div className={mode === "light" ? "menu" : "menu blackk"}>
                    <ul>
                        <li><BiTask className='sz'/> <span>All Tasks</span></li>
                        <li className="active"><CgToday className='sz'/> <span>Today</span></li>
                        <li><CiStar className='sz'/><span> Important</span></li>
                        <li><RiBookOpenLine className='sz'/><span> Planned</span></li>
                        <li><FaBuildingUser className='sz'/><span> Assigned to me</span></li>
                    </ul>
                </div>
                <div className={mode === "light" ? "add-list" : "add-list blackk"}>
                    <button>+ Add List</button>
                </div>
                <div className={mode === "light" ? "today-tasks" : "today-tasks blackk"}>
                    <div className='flex high'>
                        <h5>Today Tasks</h5>
                        <CiCircleInfo className='circle' />
                        <div className='total'>{totalTasks}</div>
                    </div>

                    <div className="task-count">
                        <div className="progress-circle-container">
                            <div
                                className="progress-circle"
                                style={{
                                    background: `conic-gradient(green ${percentageCompleted}%, rgb(6, 44, 6) 0% 100%)`
                                }}
                            >
                                <div className={mode === "light" ? "inner-circle" : "inner-circle blackk"}></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex'>
                            <div className='black' style={{ width: '10px', height: '10px', backgroundColor: 'rgb(6, 44, 6)' }}></div>
                            <span>Pending</span>
                        </div>
                        <div className='flex'>
                            <div className='green' style={{ width: '10px', height: '10px', backgroundColor: 'green' }}></div>
                            <span>Done</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

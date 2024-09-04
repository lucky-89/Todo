import React from 'react';
import { CiSearch } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = ({ mode, setMode, side, setSide }) => {
    return (
        <header className={ mode === "light" ? "header" : "header blackk" }>
            <button className='btn' onClick={() => setSide(!side)}>
                <IoReorderThreeOutline />
            </button>
            <div className="logo">DoIt</div>
            <div className="icons">
                <button><CiSearch /></button>
                <button><PiSquaresFour /></button>
                {
                    mode === "light" 
                    ? <button className='light'><MdDarkMode onClick={() => setMode("dark")} /></button> 
                    : <button className='dark'><MdOutlineLightMode onClick={() => setMode("light")} /></button>
                }
            </div>
        </header>
    );
};

export default Header;

import React, { useContext } from 'react';
import { ThemeContext } from '../darkcontext';
import './Toggle.css';

function Toggle(props) {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({type : "TOGGLE"});
    }
    return (
        <div className='toggle' onClick={handleClick}>
            <img src="/assets/sun.png" alt="Sun Icon" className="toggleimage" />
            <img src="/assets/moon.png" alt="Moon Icon" className="toggleimage" />
            <div style={{left : theme.state.darkMode ? 0 : "50px", backgroundColor : theme.state.darkMode && "#ccc"}} className="togglehider"></div>
        </div>
    );
}

export default Toggle;
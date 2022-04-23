import "./Task.css";
import React, { useState } from 'react';

const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);
   
    return (
        <div className={(isChecked ? "checked" : "unchecked") + " Task"}>
            <input 
            type="checkbox"
            onChange={($event) => setIsChecked($event.target.checked)}
            checked={isChecked} />
            <span className="task-text">{props.todo}</span>
        </div>
    );
}

export default Task;
import "./TaskList.css";
import Task from "./Task";
import React, { useState } from 'react';

const TaskList = (props) => {
    const [tasks, setTasks] = useState([
        { todo: "Take the dog out", id: 0 },
        { todo: "Do homework", id: 1 },
        { todo: "Learn for math test", id: 2 },
    ]);

    const AddTask = (todo) => {
        if (todo !== "") {
            setTasks([...tasks, { todo, id: tasks.length + 1 }]);
        }
        setInput("");
    };
    const RemoveTask = (id) => {
        const newTasks = tasks.filter(t => t.id !== id);
        setTasks(newTasks);
    };
    const [input, setInput] = useState('');

    return (
        <>
            <div className='TaskListContainer'>
                {
                    tasks && tasks.map(task =>
                        <div className="task-item" key={task.id}>
                            <Task className="task-text" todo={task.todo} />
                            <img src={process.env.PUBLIC_URL + "x-icon.svg"} onClick={() => RemoveTask(task.id)} />
                            <br />
                        </div>
                    )
                }
            </div>
            <div className='NewTaskContainer'>
                <span id="labeladd">Type a new task:</span>
                <span>
                    <br/>
                    <input className="inputask" type="text" placeholder="What you need to do?" value={input} onInput={$event =>setInput($event.target.value) } />
                </span>
                <button className="addtask" onClick={() => AddTask(input)}>Add Task</button>
            </div>
        </>
    );
}

export default TaskList;
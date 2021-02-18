import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    const { id, text, day } = task;
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(id)}>
            <h3 key={id}>
                {text}
                <FaTimes
                    onClick={() => onDelete(id)}
                    style={{ color: 'gray', cursor: 'pointer' }}
                />
            </h3>
            <p>{day}</p>
        </div>
    )
}

export default Task

import { Fab } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function CreateArea({ onAdd }) {
    const [Task, setTask] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        console.log(event.target)
        const { name, value } = event.target;

        setTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            };
        });
    }   

    function SubmitTask(event) {
        if (event) event.preventDefault();
        if (!Task.title.trim() && !Task.content.trim()) return;
        if (typeof onAdd === 'function') {
            onAdd(Task);
        }
        setTask({ title: "", content: "" });
    }

    return (
        <div>
            <form className="create-task">
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={Task.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Enter task details..."
                    value={Task.content}
                    onChange={handleChange}
                    rows="3"
                />
                <Fab onClick={SubmitTask} aria-label="add">
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;

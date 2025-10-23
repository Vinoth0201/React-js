import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/createarea';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newTask.title,
        content: newTask.content,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addTask} />

      <div className="task-list">
        {tasks.length === 0 && <p className="empty">No tasks yet. Add one above.</p>}

        {tasks.map(task => (
          <div key={task.id} className="task">
            <h3>{task.title}</h3>
            <p>{task.content}</p>
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

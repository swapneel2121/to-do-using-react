import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'course', description: 'complete react course' },
    { id: 2, title: 'assignments', description: 'complete given assg in given time' },
  ]);

  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const addTask = () => {
    if(newTask.title === ''){

      alert("Please Fill Title");

    }else if(newTask.description === ''){

      alert("Please Fill Description");

    }else{

      setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
      setNewTask({ title: '', description: '' });

    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
    <h2 className='text-center mt-4'>Todo App</h2>
    <div className="container mt-4">
      

      <div className="mb-3">
        
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder='Title'
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
      </div>
       
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder='Description'
          id="description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
      </div>

      <button className="btn btn-primary" onClick={addTask}>Add Task</button>

      <h4 className="mt-4">Tasks</h4>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{task.title}</strong>: {task.description}
            </div>
            <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TodoApp;
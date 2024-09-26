import React, { useState } from 'react'

const Todo = () => {
    const [taskInput, setTaskInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTaskInput, setEditTaskInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmimtForm = (e) => {
        e.preventDefault();
        if(taskInput.trim() === ''){
            return;
        }
        setTodos([...todos, taskInput]);
        setTaskInput('');
    };

    const handleDelete = (i) => {
        setTodos(todos.filter((todo, index) => index !== i));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditTaskInput(todos[index]);
    };

    const handleSaveEditForm = (e, index) => {
        e.preventDefault();
        if(editTaskInput.trim() === ''){
            return;
        }
        setTodos(todos.map((todo, i) => i === index ? editTaskInput : todo));
        handleCancel();
    };

    const handleCancel = () => {
        setEditIndex(null);
        setEditTaskInput('');
    }
   

  return (
    <div>
        <h1>Todo App</h1>
        <div className='input-container'>
            <form onSubmit={handleSubmimtForm}>
                <input className='input-field' type='text' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                <button className='btn' type='submit'>Submit</button>
            </form>
            <ul className='ul-list'>
                {todos.map((todo, index) => {
                    return (
                        <li className='list' key={index}>
                            {editIndex === index ? (
                                <form onSubmit={(e) => handleSaveEditForm(e, index)}> 
                                    <input type='text' value={editTaskInput} onChange={(e) => setEditTaskInput(e.target.value)} />
                                    <button type='submit'>Save</button>
                                    <button onClick={handleCancel}>Cancel</button>
                                </form>
                            ) : (
                                <>
                                {todo}
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                                </>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Todo;
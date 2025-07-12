import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addTasksToTheToDoList = () => {
    const text = inputRef.current.value.trim();
    const newItem = { completed: false, text }
    if (text === '') return;
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const completedTrue = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
    console.log(todos[index])
  }


  const deleteElement = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }


  return (
    <div className="app-container">
      <h1 className="app-title">To do list</h1>
      <ul className="todo-list">
        {todos.map(({ text, completed }, index) => (
          <div>
            <li
              key={index}
              className={`todo-list-item ${completed ? "done" : ""}`}
              onClick={() => completedTrue(index)}
            >
              <span>{text}</span>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteElement(index);
                }}
              >
                ❌
              </button>
            </li>

          </div>
        ))}
      </ul>
      <input
        ref={inputRef}
        className="todo-input"
        placeholder="Add Tasks..."
        onKeyDown={(e) => e.key === 'Enter' && addTasksToTheToDoList()}
      />
      <button className="todo-button" onClick={addTasksToTheToDoList}>Add</button>
    </div>
  );
}

export default App;

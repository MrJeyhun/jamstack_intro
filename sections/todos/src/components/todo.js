import React from "react";
import axios from "axios";

import * as styles from "./todo.module.css";

const Todo = ({todo, reloadTodos}) => {
    function togglesCompleted () {
        axios.
            post('/api/toggle-completed', {
                id: todo._id,
                text: todo.text,
                completed: !todo.completed
            }).
                then(reloadTodos);
    }

    function handleDelete () {
        axios.post('/api/delete-todo', { id: todo._id })
            .then(reloadTodos)
    }

    return (
        <>
            <label 
                htmlFor={`todo-toggle-${todo._id}`} 
                className={styles.label}
            >
                Mark Complete
            </label>
            <input 
                className={styles.toggle}
                id={`todo-toggle-${todo._id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={togglesCompleted}
            />
            <p className={`${styles.text} ${todo.completed && styles.completed}`}>
                {todo.text}
            </p>
            <label 
                htmlFor={`todo-delete-${todo._id}`}
                className={styles.label}
            >
                delete
            </label>
            <button 
                className={styles.remove}
                onClick={handleDelete}
            >
                <span role="img" aria-label="delete" title="delete this todo">❌</span>
            </button>
        </>
    );
}

export default Todo;
import React, { useEffect, useState } from "react";
import axios from "axios";

import * as styles from "./index.module.css";
import Todo from "../components/todo";
import Form from "../components/form";

export default () => {
    const [status, setStatus] =  useState('loading');
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        let canceled = false;

        if (status !== 'loading') return;

        axios('/api/get-all-todos').then(result => {
            if (canceled === true) return;
            console.log("result: ", result);

            if (result.status !== 200) {
                console.error('Error loading todos!')
                console.error(result)

                return;
            }

            setTodos(result.data.todos)
            setStatus('loaded')
        })

        return () => {
            canceled = true
        }
    }, [status])

    function reloadTodos() {
        setStatus('loading')
    }


    return (
        <main>
            <h1 className={styles.heading}>Jamstack todos!</h1>
            <Form reloadTodos={reloadTodos}/>
            {todos ? (
                <ul className={styles.todos}>
                    {todos.map(todo => (
                        <li key={todo._id} className={styles.todo}>
                            <Todo todo={todo} reloadTodos={reloadTodos} />
                        </li>
                    ))}
                </ul>
            ): (
                <p className={styles.loading}>loading todos...</p>
            )}
        </main>
    )
}
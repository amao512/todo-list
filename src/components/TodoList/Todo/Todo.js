import React from 'react';
import s from './todo.module.scss';

const Todo = ({ todo, index, removeTodo }) => {
    return (
        <div className={s.todo} >
            <label htmlFor={todo.id}>{index + 1}. {todo.title}</label>
            <button onClick={() => removeTodo(todo.id)}>delete</button>
        </div>
    )
}

export default Todo;
import React from 'react';
import s from './todoList.module.scss';
import Todo from './Todo/Todo';

const TodoList = ({ todos, removeTodo }) => {

    if(todos.length === 0){
        return <p className={s.noTodos}>There is no any kind of todos</p>
    }

    return (
        <div className={s.todoList}>
            {todos.map((todo, index) => (
                <Todo key={todo.id} todo={todo} index={index} removeTodo={removeTodo}/>
            ))}
        </div>
    )
}

export default TodoList;
import React, { useEffect, useState, Suspense } from 'react';
import './App.css';
import { v4 } from 'uuid';
import { getAPI } from './api/api';

import FormContainer from './components/Form/FormContainer';
import Loading from './components/Loading/Loading';

const TodoList = React.lazy(() => import('./components/TodoList/TodoList'));


const App = () => {

    const [todos, setTodos] = useState([]);

    const createTodo = todoText => {
        setTodos(todos.concat({userId: 1, id: v4(), title: todoText, completed: false }))
    }

    useEffect(() => {
        getAPI().then(todos => setTodos(todos))
    }, [])

    const removeTodo = id => {
      setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <div className="App">
            <FormContainer createTodo={createTodo}/>

            <Suspense fallback={<Loading/>}>
                <TodoList todos={todos} removeTodo={removeTodo}/>
            </Suspense>
        </div>
    );
}

export default App;

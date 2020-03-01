import React from 'react';
import logo from './logo.svg';
import s from './form.module.scss';


const Form = ({ writeText, sendTodo, value }) => {
    return (
        <div className={s.form}>
            <div className={s.logo}>
                <img className='App-logo' src={logo} alt='logo'/>
                <h3>Todo List</h3>
            </div>

            <form onSubmit={sendTodo}>
                <input value={value} onChange={writeText} />
                <button type='submit'>GO</button>
            </form>
        </div>
    )
}


export default Form;
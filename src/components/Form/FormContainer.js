import React, { useState } from 'react';
import Form from './Form';

const FormContainer = ({ createTodo }) => {

    const [value, setValue] = useState('');

    const writeText = e => setValue(e.target.value)

    const sendTodo = e => {
        e.preventDefault();

        if(value.trim()){
            createTodo(value);
            setValue('');
        }
    }

    return <Form writeText={writeText} 
                 sendTodo={sendTodo}
                 value={value}/>
}

export default FormContainer;
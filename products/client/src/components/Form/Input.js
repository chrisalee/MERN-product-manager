import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Input = ({type, name, placeholder, value, error, handleChange}) => {
    // can use a label instead of a placeholder
    const style = {
        color: 'maroon',
        textAlign: 'center',
        fontFamily: 'monospace',
        width: '100%'

    }
    
    return(
        <div>

            <p style={style}> {error ? error : ''} </p>
            <input
                placeholder = {placeholder}
                type = {type}
                name = {name}
                value = {value}
                onChange = {(event) => handleChange(event)}
            />

        </div>
    );
}

export default Input;
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10}) => {

    const [counter, setCounter] = useState(value);


    const handleAdd = () => {
        setCounter(counter + 1);
        //Otra forma sería
        //setCounter((c) => c + 1);
    }

    const handleSubstract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);
    

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
        //Si yo pongo handleAdd() lo va a renderizar antes que el boton mismo, entonces va a retornar undefined
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
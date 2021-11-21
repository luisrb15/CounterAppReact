//UpperCase porque es un componente.
//FuntionalComponent. Regresa Html.
import React from 'react';
import PropTypes from 'prop-types';


// const saludo = 'Hola Mundo';

// const PrimeraApp = ({saludo}) => { //También puede tener un valor por defecto si pongo saludo='Hola Mundo'
//     return <>
//         <h1>{ saludo }</h1> 
//         <p>Mi primera aplicación</p>
//     </>
// }

// export default PrimeraApp;

//Se puede poner valor por defecto a subtitulo o cualquiera de los elementos, si en el parámetro se le pasa "subtitulo = 'Mi subtitulo'"
const PrimeraApp = ({saludo , subtitulo}) => { 
    return <>
        <h1>{ saludo }</h1> 
        <p>{ subtitulo }</p>
    </>
}

//PropTypes, para obligar a que se pasen cosas de un determinado modo.
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Otra forma de mandar valores por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
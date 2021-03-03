import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
    return (
        <>
            <h1> {saludo} </h1>
            <h2> {subtitulo}</h2>
        </>
    );
    return <h1>Hola mundo</h1>;
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;

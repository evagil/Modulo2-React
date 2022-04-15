import React, { Component } from 'react'
import App from './App';

export default class estudiante extends Component {

    //-- JSX
    render() {
        return (
            <div className="contenedor">
                <p>Apellido: Gil</p>
                <p>Nombre: Evangelina Edith</p>
                <p>Carrera: Lic. en sistemas</p>
            </div>
        )
    }
}

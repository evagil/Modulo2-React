import React, { Component } from 'react'
import "./Estilo.css";

export default class Estudiante extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='contenedor_div'>
                <p>{this.props.nombre + ", " +
                    this.props.apellido + " - " +
                    this.props.carrera}
                </p>
            </div>
        )
    }
}

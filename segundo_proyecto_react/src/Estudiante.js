import React, { Component } from 'react'
import './Contenedor.css';


export default class estudiante extends Component {
    render() {
        let obj = {
            nombre: "Evangelina Edith",
            apellido: "Gil",
            carrera: "Lic. en sistemas",
        };
        return (
            <div className='contenedor_div'>
                <p>{obj.nombre}</p>
                <p>{obj.apellido}</p>
                <p>{obj.carrera}</p>
            </div>
        )
    }
}



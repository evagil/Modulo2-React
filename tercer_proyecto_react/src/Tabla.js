import React, { Component } from 'react'
import './Estilo.css'

export default class Tabla extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        let curso = ["Matematicas", "Organizacion", "Objetos", "Conceptos y Paradigmas"];
        let horario = ["10 hs semanales", "15 hs semanales", "29 hs semanales", "19 hs semanales"];
        this.state = {
            randomCurso: curso[Math.floor(Math.random() * curso.length)],
            randomHorario: horario[Math.floor(Math.random() * horario.length)],
        };
    }

    handleClick() {
        //console.log('hand');
        this.setState((state) => ({
            randomAll: [...state.randomCurso, ...state.randomHorario],
        }));
    }
    //  randomHorario: [...state.randomHorario, 'sdf'],
    render() {
        return (
            <div className='contenedor_div'>
                <table class="default">
                    <tr>
                        <th className='th'> <strong>Curso</strong></th>
                        <th className='th'> <strong>Cantidad de Horas</strong></th>
                    </tr>
                    for (let element of randomAll){
                        <tr>
                            <td className='td'>{this.state.randomAll.curso}</td>
                            <td className='td'>{this.state.randomAll.horario}</td>
                        </tr>
                    }
                </table>
                <p><button onClick={this.handleClick}>Inscribirme</button></p>
            </div>
        )
    }
}

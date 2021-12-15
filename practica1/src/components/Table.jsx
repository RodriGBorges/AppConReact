import './table.css'
import Row from './Row'

export default function Table() {

    const fila = [
        {
            titulo: "Billy Elliot",
            duracion: 123,
            rating: 5,
            genero: ["drama", "comedia"],
            premios: 2
        },
        {
            titulo: "Alicia en el país de las maravillas",
            duracion: 142,
            rating: 4.8,
            genero: ["drama", "comedia", "accion"],
            premios: 3
        },
    ]

    return (
        <div class="divTable">

            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Genero</th>
                    <th>Premios</th>
                </thead>
                <tbody>
                <Row filas={fila}/>
                </tbody>
            </table>
        </div>
    )
}
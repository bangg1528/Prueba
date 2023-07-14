import React from 'react'

export default function CardZone(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" >{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
            </div>
        </div>
    )
}

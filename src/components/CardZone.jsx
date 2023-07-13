import React from 'react'

export default function CardZone(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" src={props.nombre}>Zonas de ejercio</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

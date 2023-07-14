import React from 'react'

export default function CardSede(props) {
    return (
        <div>
            <div className="card mt-5 mb-5" style={{width : "26rem"}}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <img src={props.imagenes} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo}</h5>
                            <p className="card-text">{props.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

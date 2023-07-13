import React from 'react'
import imagen1 from '../assets/img/Zona-de-cardio.jpeg'

export default function CardSede() {
    return (
        <div>
            <div className="card mt-5 mb-5" style={{width : "26rem"}}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <img src={imagen1} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Carru1 from '../assets/img/Carrusel1.png'
import Carru2 from '../assets/img/Carrusel2.png'

export default function CarruselAuto() {
    return (
        <div>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Carru1} className="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Carru2} className="d-block w-100 h-50" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

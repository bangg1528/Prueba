import React from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    
    const navigate = useNavigate()
    function enlaceInicio() {
        navigate("/", { replace: false });
    }
    function enlaceSedes() {
        navigate("/Sedes", { replace: false });
    }
    function enlaceContacto() {
        navigate("/Form", { replace: false });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-terrary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Gym BP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=>enlaceInicio()}>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>enlaceSedes()}>Sedes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>enlaceContacto()}>Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

import React from 'react'
import { useNavigate } from "react-router-dom";
import pesa from '../assets/img/LogoGYM.png'

export default function NavbarSmall() {
    const navigate = useNavigate()
    function enlaceMiCuenta() {
        navigate("/MiCuenta", { replace: false });
    }
    function enlaceInicio() {
        navigate("/", { replace: false });
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={pesa} alt="Logo" width="120" height="70" className="d-inline-block align-text-top mx-2"/>
                            GYM BP (BadPancho)
                    </a>
                    <div>
                        <ul className="me-auto mb-2 mb-lg-0 d-flex gap-3 list-unstyled">
                            <li className="nav-item d-flex gap-3">
                                <a className="nav-link" href="https://www.facebook.com">
                                    <i className="bi bi-facebook"/>
                                </a>
                                <a className="nav-link" href="https://www.instagram.com">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a className="nav-link" href="https://www.twitter.com">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>enlaceMiCuenta()}>Mi cuenta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>enlaceInicio()}>Salir</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

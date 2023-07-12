import React from 'react'
import pesa from '../assets/img/pesa.png'

export default function NavbarSmall() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={pesa} alt="Logo" width="40" height="50" className="d-inline-block align-text-top mx-2"/>
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
                                <a className="nav-link" href="#">Mi cuenta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Salir</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

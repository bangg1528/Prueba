import React from 'react'

export default function Footer() {
    return (
        <div className='bg-body-secondary'>
            <ul className="me-auto mb-2 mb-lg-0 d-flex justify-content-center gap-3 list-unstyled">
                <li className="nav-item d-flex gap-3">
                    <a className="nav-link" href="https://www.facebook.com">
                        <i className="bi bi-facebook" />
                    </a>
                    <a className="nav-link" href="https://www.instagram.com">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="nav-link" href="https://www.twitter.com">
                        <i className="bi bi-twitter"></i>
                    </a>
                </li>
            </ul>
            <p className='text-center'>© Copyright BP(BadPancho). Todos los derechos reservados.</p>
        </div>
        
    )
}

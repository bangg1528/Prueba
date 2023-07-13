import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormInicio() {
    const navigate = useNavigate()
    function enlaceListado() {
        navigate("/Listado", { replace: false });
    }
    return (
        <div className='container'>
            <form>
                <div className="mt-5 mb-3">
                    <label className="form-label">Correo electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label mb-3">Recuerdame</label>
                </div>
                <input className="btn btn-primary mb-5" type="submit" value="Submit" onClick={() => enlaceListado()}></input>
            </form>
        </div>
    )
}

import React from 'react'

export default function FormInicio() {
    return (
        <div className='container'>
            <form>
                <div class="mt-5 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label mb-3" for="exampleCheck1">Recuerdame</label>
                </div>
                <input className="btn btn-primary mb-5" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

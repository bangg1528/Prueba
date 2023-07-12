import React from 'react'

export default function Form() {
  return (
    <div className=' container text-center'>

        <label htmlFor="" className='mt-5 '>Nombre</label>
        <input className="form-control mb-4" type="text"/>

        <label htmlFor="">Apellido</label>
        <input className="form-control mb-4" type="text"/>

        <label htmlFor="">Rut</label>
        <input className="form-control mb-4" type="text"/>

        <label htmlFor="">E-mail</label>
        <input className="form-control mb-4" type="mail"/>

        <label htmlFor="">Selecciona tu sede</label>
        <select name="" id="" className='form-control mb-4'>
            <option value="1">Estacion Central</option>
            <option value="2">La florida</option>
            <option value="3">Cerrillos</option>
            <option value="4">Las Condes</option>
        </select>

        <input className="btn btn-primary mb-5" type="submit" value="Submit"></input>

    </div>
  )
}

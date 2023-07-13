import React, { useEffect, useState } from 'react'

export default function Form() {

  const [inputValue, setInputValue] = useState({})
  function handleChange(e){
    setInputValue({...inputValue,[e.target.name]:e.target.value})
  }
  console.log(inputValue)

  function handleSubmit(){
    localStorage.setItem("item", JSON.stringify(inputValue))
  }

  return (
    <form className=' container text-center' onSubmit={handleSubmit}>

        <label htmlFor="" className='mt-5 '>Nombre</label>
        <input className="form-control mb-4" type="text" name='nombre' onChange={handleChange} />

        <label htmlFor="">Apellido</label>
        <input className="form-control mb-4" type="text" name='apellido' onChange={handleChange}/>

        <label htmlFor="">Rut</label>
        <input className="form-control mb-4" type="text" name='rut' onChange={handleChange}/>

        <label htmlFor="">Correo</label>
        <input className="form-control mb-4" type="mail" name='correo' onChange={handleChange}/>

        <label htmlFor="">Selecciona tu sede</label>
        <select name="sedes" id="" className='form-control mb-4' onChange={handleChange}>
            <option value="">Elija sede</option>
            <option value="Estacion Central">Estacion Central</option>
            <option value="La florida">La florida</option>
            <option value="Cerrillos">Cerrillos</option>
            <option value="Las Condes">Las Condes</option>
        </select>

        <input className="btn btn-primary mb-5" type="submit" value="submit"/>
    </form>
  )
}

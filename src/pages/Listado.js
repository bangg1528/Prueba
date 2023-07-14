import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid' 


export default function Listado() {
  const id = uuidv4()
  const storage = localStorage.getItem('item')

  
  const [data, setData] = useState([])
  function getData() {
    setData([JSON.parse(storage)])
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h2 className='mb-5 mt-5 text-center'>Registro de Contacto</h2>
      <table className="table container ">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Rut</th>
            <th scope="col">Correo</th>
            <th scope="col">Sede</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(i => {
              return (
                <tr key={id}>
                  <td>{i.nombre}</td>
                  <td>{i.apellido}</td>
                  <td>{i.rut}</td>
                  <td>{i.correo}</td>
                  <td>{i.sedes}</td>
                </tr>
              )

            })
          }
        </tbody>
      </table>

    </div>
  )
}

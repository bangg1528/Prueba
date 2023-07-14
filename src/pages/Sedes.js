import React from 'react'
import CardSede from '../components/CardSede'
import sede1 from '../assets/img/Sede1.png'
import sede2 from '../assets/img/Sede2.png'
import sede3 from '../assets/img/Sede3.png'
import sede4 from '../assets/img/Sede4.png'

export default function Sedes() {
  return (
    <div>
      <h2 className='mt-5 mb-5 text-center'>Nuestras Sedes</h2>
      <div className='gap-3 d-flex justify-content-center'>
        <CardSede imagenes={sede1} titulo="Estacion central" descripcion="Dirección: Av. Libertador Bernardo O'Higgins 3470, Estación Central, Región Metropolitana Teléfono: (562) 1233 2313 Horarios: Lunes a viernes: 6:00 a 22:30 Sábado: 8:00 a 18:00"/>
        <CardSede imagenes={sede2} titulo="La florida" descripcion="Dirección: San Carlos de Ancud 7110, La Florida, Región Metropolitana Teléfono: (562) 3153 5502 Horarios: Lunes a viernes: 6:00 a 22:30 Sábado: 8:00 a 18:00 Domingo: 9:00 a 14:00"/>
      </div>
      <div className='gap-3 d-flex justify-content-center'>
        <CardSede imagenes={sede3} titulo="Cerrillos" descripcion="Dirección: Av. Américo Vespucio 1501, Cerrillos, Región Metropolitana Teléfono: (562) 4233 8501 Horarios: Lunes a viernes: 6:00 a 22:30 Sábado: 8:00 a 18:00 Domingo: 9:00 a 14:00"/>
        <CardSede imagenes={sede4} titulo="Las condes" descripcion="Dirección: Cerro el Plomo 5630-5680 Piso -1, Local 8001, Las Condes, Región Metropolitana Teléfono: (562) 7823 9208 Horarios: Lunes a viernes: 6:00 a 22:30 Sábado: 8:00 a 18:00 Domingo: 9:00 a 14:00" />
      </div>
    </div>

  )
}

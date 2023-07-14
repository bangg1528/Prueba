import React from 'react'
import CarruselAuto from '../components/CarruselAuto'
import CardZone from '../components/CardZone'
import ZonaCardio from '../assets/img/Zona-de-Cardio.png'
import ZonaContacto from '../assets/img/Zona-de-conctacto.png'
import ZonaCrossfit from '../assets/img/Zona-de-crossfit.png'
import ZonaMulti from '../assets/img/Zona-de-multi-uso.png'
import ZonaPesoL from '../assets/img/Zona-de-peso-libre.png'
import ZonaPeso from '../assets/img/Zona-de-peso.png'



export default function Main() {
  return (
    <div>
      <CarruselAuto/>
      <h3 className='text-center mb-5 mt-5'>Nuestras clases</h3>
      <div className='d-flex justify-content-center gap-3 mb-5'>
        <CardZone imagen={ZonaCardio} nombre="Zona de Cardio" descripcion="espacio equipado con máquinas de ejercicio para mejorar la salud cardiovascular"/>
        <CardZone imagen={ZonaContacto} nombre="Zona de Contacto" descripcion="espacio equipado para artes marciales y entrenamiento físico especializado"/>
        <CardZone imagen={ZonaCrossfit} nombre="Zona de Crossfit" descripcion="espacio con pesas libres y equipos funcionales para entrenamiento de fuerza, resistencia y movilidad"/>
      </div>
      <div className='d-flex justify-content-center gap-3 mb-3'>
        <CardZone imagen={ZonaMulti} nombre="Zona Multi uso" descripcion="espacio equipado con variedad de equipos para entrenamiento de fuerza, cardio y entrenamiento funcional"/>
        <CardZone imagen={ZonaPesoL} nombre="Zona Peso Libre" descripcion="espacio que cuenta con barras, mancuernas y discos para entrenar la musculatura corporal con libertad de movimiento"/>
        <CardZone imagen={ZonaPeso} nombre="Zona Peso" descripcion=" espacio con equipos y pesas libres para entrenar la musculatura y fuerza corporal"/>
      </div>
    </div>
  )
}

import React from 'react'
import CarruselAuto from '../components/CarruselAuto'
import CardZone from '../components/CardZone'
import ZonaCardio from '../assets/img/Zona-de-cardio.jpeg'
import ZonaCrossfit from '../assets/img/Zona-de-croossfit.png'
import ZonaBox from '../assets/img/Zona-de-deporte-de-contacto.png'
import ZonaFuerza from '../assets/img/Zona-de-fuerza-gym.png'
import ZonaMulti from '../assets/img/Zona_multi_Uso.jpg'
import ZonaPesoL from '../assets/img/Zona_de_Peso_libre.jpg'




export default function Main() {
  return (
    <div>
      <CarruselAuto/>
      <h3 className='text-center mb-5 mt-5'>Nuestras clases</h3>
      <div className='d-flex justify-content-center gap-3 mb-5'>
        <CardZone imagen={ZonaCardio}/>
        <CardZone imagen={ZonaCrossfit}/>
        <CardZone imagen={ZonaBox}/>
      </div>
      <div className='d-flex justify-content-center gap-3 mb-3'>
        <CardZone imagen={ZonaFuerza}/>
        <CardZone imagen={ZonaMulti}/>
        <CardZone imagen={ZonaPesoL}/>
      </div>
      <img src='...'></img>
    </div>
  )
}

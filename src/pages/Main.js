import React from 'react'
import CarruselAuto from '../components/CarruselAuto'
import CardZone from '../components/CardZone'


export default function Main() {
  return (
    <div>
      <CarruselAuto/>
      <h3 className='text-center mb-5'>Nuestras clases</h3>
      <div className='d-flex justify-content-center gap-3 mb-5'>
        <CardZone/>
        <CardZone/>
        <CardZone/>
      </div>
      <div className='d-flex justify-content-center gap-3 mb-3'>
        <CardZone/>
        <CardZone/>
        <CardZone/>
      </div>
      <img src='...'></img>
    </div>
  )
}

import React from 'react'
import CardSede from '../components/CardSede'

export default function Sedes() {
  return (
    <div>
        <h2 className='mt-5 mb-5 text-center'>Nuestras Sedes</h2>
        <div className='gap-3 d-flex justify-content-center'>
        <CardSede/>
        <CardSede/>
        </div>
        <div className='gap-3 d-flex justify-content-center'>
        <CardSede/>
        <CardSede/>
        </div>
    </div>
    
  )
}

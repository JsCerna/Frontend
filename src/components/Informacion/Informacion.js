import React from 'react'
import '../Informacion/informacion.css'
import UserContext from '../../config/contexts/users/UserContext'
import { useEffect, useContext } from 'react'

const Informacion = () => {
  const userCtx = useContext( UserContext )
  const { authStatus, verifyingToken } = userCtx
  useEffect( () => {
    if ( !authStatus ) {
      const verifyUser = async () => {
        await verifyingToken()
      }
      verifyUser()
    }
  }, [ authStatus, verifyingToken ] )

  return (
    <section className='planilla'>
      <h1><u>Upgrade Your Truck</u></h1>
      <h2>Since 2022</h2>
      <p className='parrafo'>El objetivo principal que nos impulsó a realizar este emprendimiento fue la idea de brindar a nuestros clientes equipamientos de calidad para sus camionetas, para de esta manera disfrutar de todos los caminos off-road que se puedan presentar en sus aventuras.
      </p>
      <p className='parrafo'> <b>Visión:</b> Ser una empresa modelo en servicio automotriz a nivel nacional, creando conciencia de la importancia de un equipamiento adecuado para caminos off-road, tanto para los clientes como para el entorno.
      </p>
      <p className='parrafo'> <b>Misión:</b> Ser un establecimiento que ofrezca servicios de calidad, donde se satisfaga las necesidades de los clientes en forma rápida, eficiente y eficaz.
      </p>
      <p className='parrafo'><u>En la actualidad estamos físicamente ubicados en Auto Planet Concepción centro.</u></p>
      <img className='logo' src="https://i.ibb.co/pwymzdq/logo-proyecto5b.png" alt=' '/>
      </section>
  )
}

export default Informacion
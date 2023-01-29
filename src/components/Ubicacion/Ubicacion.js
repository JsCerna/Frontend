import React from 'react'
import '../Ubicacion/ubicacion.css'
import UserContext from '../../config/contexts/users/UserContext'
import { useEffect, useContext } from 'react'

const Ubicacion = () => {
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
    <div className='ubica'>
    <h1>Encuéntranos en Concepción Centro</h1>
    <div className='ubi'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6387.433451114971!2d-73.06472645314112!3d-36.82530743504956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5c2c2f55797%3A0x99698cdf93806550!2sAutoplanet!5e0!3m2!1ses!2scl!4v1674836182911!5m2!1ses!2scl" width="450" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default Ubicacion
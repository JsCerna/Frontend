import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserContext from '../../config/contexts/users/UserContext'
import React from 'react'
import './homy.css'
import { Carousel, Container } from 'react-bootstrap'

export default function Homy() {
  const userCtx = useContext( UserContext )
  const { authStatus, verifyingToken } = userCtx
  const [ loading, setLoading ] = useState( true )

  useEffect( () => {
    const verifyUser = async () => {
      await verifyingToken()
      setLoading( false )
    }
    verifyUser()
  }, [ authStatus, verifyingToken ] )

  if ( loading ) return ( <><Spinner></Spinner></> )
  return (
    <section className='homy'>
      <img className='logo' src="https://i.ibb.co/pwymzdq/logo-proyecto5b.png" alt='' />
    <h1>¡Bienvenidos a Upgrade your truck!</h1>
    <h2>El lugar donde encontraras el accesorio<br></br> para tu camioneta que estás buscando.</h2>
    <Container id='carrusel-container'>
          <Carousel>
          <Carousel.Item>
            <img src="https://cdn.autoproyecto.com/wp-content/uploads/2019/10/paxpower-jackal-stage-1-5.jpg" className="d-block w-100" alt="..."
              height={ 350 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.tuningblog.eu/wp-content/uploads/2018/10/Mopar-Dodge-Ram-Rebel-Smoke-Tuning-4.jpg" className="d-block w-100" alt="..." height={ 350 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.rutamotor.com/wp-content/uploads/2019/08/Ford-Raptor-V8-PaxPower-Rutamotor-12.jpg" className="d-block w-100" alt="..." height={ 350 } />
          </Carousel.Item>
        </Carousel>
        </Container>
  </section>
  )
}
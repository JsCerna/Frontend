import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import UserContext from '../../../config/contexts/users/UserContext'
import { useEffect, useContext } from 'react'
import '../Selector/selector.css'

const CatalogoSelector = () => {
const navigate = useNavigate ();
const goToLonas = () => {
    navigate({ pathname:'/catalogue', search:'?tipo=lona' })
  }
  const goToNeumatico = () => {
    navigate({ pathname:'/catalogue', search:'?tipo=neumatico' })
  }
  const goToLlanta = () => {
    navigate({ pathname:'/catalogue', search:'?tipo=llanta' })
  }
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
    <div className='lask'>
    <div className='cadaprod'>  
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://admin.gimport.cl//storage/imagenes/Bedlocker_Matte_Ford_F150_01.jpg" />
      <Card.Body>
      <Card.Title>Lonas Retractil y marítimas</Card.Title>
      <Button onClick={goToLonas} variant="primary">Ver productos</Button>
      </Card.Body>
      </Card>
    </div>
    <div className='cadaprod'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://siempreauto.com/wp-content/uploads/sites/9/2021/10/1b41d588-0cbe-4c8a-a194-ff9f3770d1a3.jpg?resize=360,270&quality=80" />
      <Card.Body>
      <Card.Title>Neumáticos</Card.Title>
      <Button onClick={goToNeumatico} variant="primary">Ver productos</Button>
      </Card.Body>
      </Card>
    </div>
    <div className='cadaprod'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.offroad.cl/wp-content/uploads/2019/06/tuff-flat-black.jpg" />
      <Card.Body>
      <Card.Title>Llantas</Card.Title>
      <Button onClick={goToLlanta} variant="primary">Ver productos</Button>
      </Card.Body>
      </Card>
    </div>
    </div>
  )
}

export default CatalogoSelector
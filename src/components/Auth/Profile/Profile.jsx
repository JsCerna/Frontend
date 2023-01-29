import React from 'react'
import UserContext from '../../../config/contexts/users/UserContext'
import { useContext } from 'react';
import '../Profile/profile.css'
import { useNavigate, } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function Profile() {

  const userContext = useContext(UserContext);
  const {user} = userContext
  const navegar = useNavigate ();
  const goToHomy = () => {
    navegar({ pathname:'/'})
  }
  const goToCatalogox = () => {
    navegar({ pathname:'/catalogo-selector'})
  }
  return (
    <>
      <section className='homy'>
      <img className='logo' src="https://i.ibb.co/pwymzdq/logo-proyecto5b.png" alt='' />
        <h1><b>Bienvenido</b></h1>
        <h1>{user.fullName}</h1>
        <h1>Gracias por tu visita</h1>
        <h2><i>Si tienes problemas para realizar 
        una compra,<br></br> ponte en contacto con nosotros vía <br></br>
        WhatsApp o llamando al callcenter.
        </i></h2>
        <div className='bot'>
        <Button onClick={goToHomy} variant="primary">Volver al inicio</Button>
        </div>
        <div className='bot'>
        <Button onClick={goToCatalogox} variant="primary">Ir a Catalogo</Button>
        </div>
      </section>
    </>
  )
}


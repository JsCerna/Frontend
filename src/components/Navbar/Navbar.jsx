import React, { useContext, useState } from 'react';
import { Badge, Button, Container, Nav } from 'react-bootstrap';
import NavbarBT from 'react-bootstrap/Navbar';
import ShoppingCartContext from '../../config/contexts/shopping-cart/ShoppingCartContext';
import UserContext from '../../config/contexts/users/UserContext';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import './navbar.css';
import {FaShoppingCart} from "react-icons/fa";

export default function Navbar() {
  const userCtx = useContext(UserContext)
  const shoppingCartCtx = useContext(ShoppingCartContext)
  const { logout, user } = userCtx
  const { products } = shoppingCartCtx
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const handleCloseShoppingCart = () => setShowShoppingCart(false);
  const handleShowShoppingCart = () => setShowShoppingCart(true);
  return (
    <>
      <NavbarBT id="navbar-bootstrap" bg='dark' variant='dark' expand="md">
        <Container>
          <img className="navbar-brand" alt=' ' src="https://i.ibb.co/HCvh1b2/Red-Alloy-Wheel-PNG.png" width="5%" />
          <NavbarBT.Brand href='/'>
            Inicio
          </NavbarBT.Brand>
          <NavbarBT.Toggle aria-controls="basic-navbar-nav"></NavbarBT.Toggle>
          <NavbarBT.Collapse id='basic-navbar-nav'>
            <Nav>
              {
                user?.email ? <>
                  <Nav.Link href='/profile'>Perfil</Nav.Link>
                  <Nav.Link onClick={() => logout()} href='/'>Cerrar sesión</Nav.Link>
                  <Button onClick={ handleShowShoppingCart }>
                    <FaShoppingCart/> <Badge bg="secondary">{ products.length > 0 ? products.length : '' }</Badge>
                  </Button>
                </> : <>
                  <Nav.Link href='/auth/login'>Iniciar sesión</Nav.Link>
                  <Nav.Link href='/auth/signup'>Registrarse</Nav.Link>
                </>
              }
              <Nav.Link href='/informacion'>¿Quiénes somos?</Nav.Link>
              <Nav.Link href='/catalogo-selector'>Catálogo</Nav.Link>
              <Nav.Link href='/ubicacion'>Ubicación</Nav.Link>
            </Nav>
          </NavbarBT.Collapse>
        </Container>
      </NavbarBT>
      <ShoppingCart showShoppingCart={ showShoppingCart } handleCloseShoppingCart={ handleCloseShoppingCart }>
      </ShoppingCart>
    </>
  );
}
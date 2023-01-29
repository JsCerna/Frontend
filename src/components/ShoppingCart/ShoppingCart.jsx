import { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'
import ShoppingCartContext from '../../config/contexts/shopping-cart/ShoppingCartContext'
import '../ShoppingCart/shopcart.css'

const ShoppingCart = ( props ) => {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { getProducts, products, removeProduct } = shoppingCartCtx
  const { showShoppingCart, handleCloseShoppingCart } = props
  const [ total, setTotal ] = useState( 0 )

  useEffect( () => {
    if ( !products ) {
      getProducts()
    } else {
      setTotal( 0 )
      products.forEach( product => {
        const precio = parseInt( product.precio )
        setTotal( ( current ) => {
          return current + precio * product.quantity
        } )
      } )

    }
  }, [ products, getProducts ] )

  const handlePayment = () => {
    window.location.href = '/checkout'
  }
  return (
    <Modal show={ showShoppingCart } onHide={ handleCloseShoppingCart }>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          products?.length === 0 ? 'No hay productos en el carrito'
            : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products?.map( ( product, index ) => {
                      return (
                        <tr key={ index }>
                          <td>{ index + 1 }</td>
                          <td>{ product.name }</td>
                          <td>{ product.precio * product.quantity }</td>
                          <td>{ product.quantity }</td>
                          <td><button onClick={ ( e ) => {
                            e.stopPropagation();
                            removeProduct( product._id )
                          }
                          } ><FaTrashAlt/></button></td>
                        </tr> )
                    } )
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td>TOTAL: { total }</td>
                  </tr>
                </tfoot>
              </Table>
            )
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={ handlePayment }>
         Ir a Pagar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ShoppingCart
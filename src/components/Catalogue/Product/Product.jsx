import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import ShoppingCartContext from '../../../config/contexts/shopping-cart/ShoppingCartContext'
import '../Product/product.css'

const Product = ( props ) => {
  const { product } = props
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { addProduct } = shoppingCartCtx

  return (
    <div className='productos'>
    <Card style={ { width: '18rem' } } key={ product._id }>
      <Card.Img variant="top" src={ product.imagen } height={ 200 } />
      <Card.Body>
        <Card.Title>{ product.marca }</Card.Title>
        <Card.Text>
          { product.modelo }
            <hr/>
          { product.name }
          <hr/>
          { product.precio } $CLP
          <hr/>
        </Card.Text>
        <Button variant="primary" onClick={ () => {
          addProduct( product )
        }
        } >Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
     )
}
export default Product
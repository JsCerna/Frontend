import { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ShoppingCartContext from '../../config/contexts/shopping-cart/ShoppingCartContext';

function addCheckout( preferenceId ) {
  const mp = new window.MercadoPago( 'TEST-6e579f83-f426-4cd4-993d-20014a42decc', {
    locale: 'es-CL'
  } );
  mp.checkout( {
    preference: {
      id: preferenceId,
    },
    render: {
      container: `#payment-form`,
      label: 'Pagar',
    },
  } );
}

const Checkout = () => {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { products, removeProduct } = shoppingCartCtx
  const [ total, setTotal ] = useState( 0 )
  const [ preferenceId, setPreferenceId ] = useState( '' )
  useEffect( () => {
    setTotal( 0 )
    products.forEach( product => {
      const precio = parseInt( product.precio )
      setTotal( ( current ) => {
        return current + precio * product.quantity
      } )
    } )
  }, [ products ] )

  useEffect( () => {
    const getPreferenceId = async () => {
      const token = localStorage.getItem( 'token' )
      const fetchResponse = await fetch( 'https://upgradeyt.up.railway.app/orders', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${ token }`,
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify( { products } )
      } )
      const response = await fetchResponse.json()
      if ( !fetchResponse.ok ) {
        throw new Error( response.details )
      }
      setPreferenceId( response.preferenceId.body.id )
    }
    try {
      getPreferenceId()
    } catch ( error ) {
      console.error( error )
    }
  }, [ products ] )

  useEffect( () => {
    if ( preferenceId ) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.addEventListener( 'load', () => addCheckout( preferenceId ) ); // Cuando cargue el script, se ejecutará la función addCheckout
      document.body.appendChild( script );
    }
  }, [ preferenceId ] );
  return (
    <>
      <div className="bg-white">
        <h1>Checkout</h1>
        {
          products?.length === 0 ? 'No hay productos'
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
                          <td><button onClick={ () => {
                            removeProduct( product._id )
                          }
                          } ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></button></td>
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
      </div>
      <div className="mt-10" id="payment-form"></div>
    </>
  )
}

export default Checkout
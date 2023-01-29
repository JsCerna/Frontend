import { useEffect, useState, useContext } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import "./catalogue.css"
import Product from './Product/Product.jsx'
import UserContext from '../../config/contexts/users/UserContext'

export default function Catalogue() {
  const [products, setProducts] = useState([])
  const [loadingData, setLoadingData] = useState(true)
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("tipo"));
  const filter = searchParams.get("tipo");

  useEffect(() => {
    const obtenerCatalogue = async () => {
      try {
        const response = await fetch( `https://upgradeyt.up.railway.app/products?tipo=${filter}` )
        const products = await response.json()
        setProducts( products )
        setLoadingData( false )
      } catch ( error ) {
        console.error( error )
      }
    } 
    try {
      obtenerCatalogue()
      } catch (error) {
        setLoadingData(false)
        console.error(error)
    }
  }, [filter])

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
    <section className='full'>
    <Container>
      {
        loadingData ? (
          <Spinner animation='border' role={"status"}></Spinner>   
        ) :
          <div className='list-products'>
            {
              products.length === 0 ?
                <h1>No hay productos</h1>
                : products.map((product, index) => (
                  <Product product={product} key={index}></Product>
                  
                ))
            }
          </div>
      }
    </Container>
     </section>
  )
}
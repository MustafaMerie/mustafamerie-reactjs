import { useState } from 'react'
import productsData from '../data/productsData.json'
import Product from '../components/Product';

function ProductsList() {

  const [products, setProducts] = useState(productsData.products)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        products && products.map(product => <Product key={product._id} product={product} />)
      }
    </div>
  )
}

export default ProductsList
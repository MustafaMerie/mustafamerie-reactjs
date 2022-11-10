import { useEffect } from 'react'
import Product from '../components/Product';
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getProducts } from '../features/productsSlice'
import Message from '../components/Message';
import Loading from '../components/Loading';
import { CUSTOM_CATYGORY } from '../features/categoriesSlice';

function ProductsList() {

  const dispatch = useAppDispatch();

  const { loading, data, error } = useAppSelector((state) => state.productsSlice);
  const filter = useAppSelector((state) => state.productsSlice.filterBy);
  const filteredProducts = filter !== CUSTOM_CATYGORY.ALL.name ? data?.filter(p => p.category === filter) : data

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <>
      {loading ? <Loading /> : error ? <Message color='failure'>{error}</Message> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          filteredProducts && filteredProducts.map(product => <Product key={product._id} product={product} />)
        }
      </div>}


    </>
  )
}

export default ProductsList
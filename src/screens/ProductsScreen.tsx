import { useEffect } from 'react'
import Product from '../components/Product';
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getProducts } from '../features/productsSlice'
import Message from '../components/Message';
import Loading from '../components/Loading';

function ProductsList() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { loading, data, error } = useAppSelector((state) => state.productsSlice);

  return (
    <>
      {loading ? <Loading /> : error ? <Message color='failure'>{error}</Message> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          data && data.map(product => <Product key={product._id} product={product} />)
        }
      </div>}


    </>
  )
}

export default ProductsList
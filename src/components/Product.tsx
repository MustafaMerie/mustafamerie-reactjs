import ProductModal from '../models/productModal'
import { Card, Button } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { deleteProduct } from '../features/productsSlice';
import { addToFavorites, removeFromFavorites } from '../features/favoritesSlice';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/20/solid'

interface ProductProps {
  product: ProductModal;
}

function Product(props: ProductProps) {
  const dispatch = useAppDispatch();

  const location = useLocation()

  const {
    product: { _id, name, avatar, price },
  } = props;

  const data = useAppSelector((state) => state.favoritesSlice.data);

  return (

    <Card className='m-3'>
      <img src={avatar} className="object-contain h-48 m-auto w-96" alt={name} />

      <Link to={`/product/${_id}`}>
        <div className="flex flex-col items-center justify-between">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </Link>

      <div className='flex flex-row justify-center'>
        {
          data && data.some(p => _id === p._id) ?
            <Button size="xs" className='mr-3' onClick={() => (dispatch(removeFromFavorites(_id)))}> Remove form favorites
              <div className='w-5 m-1'>
                <SolidHeartIcon />
              </div>
            </Button>
            :
            <Button size="xs" className='mr-3' onClick={() => (dispatch(addToFavorites(props.product)))}> Add to favorites
              <div className='w-5 m-1'>
                <HeartIcon />
              </div>
            </Button>
        }
        {
          !location.pathname.includes('/favorites') && <Button size="xs" color="failure" onClick={() => (dispatch(deleteProduct(_id)))}>
            <div className='w-5 m-1'>
              <TrashIcon />
            </div>
          </Button>
        }
      </div>
    </Card>

  )
}

export default Product
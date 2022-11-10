import { useParams, useNavigate } from "react-router-dom";
import { Button } from 'flowbite-react'
import { HeartIcon } from '@heroicons/react/24/outline'
// import { HeartIcon as SolidHeartIcon } from '@heroicons/react/20/solid'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
import { getProduct } from '../features/productSlice';
import Loading from "../components/Loading";
import Message from "../components/Message";

function ProductScreen() {

  const params = useParams()
  const navigate = useNavigate()

  const dispatch = useAppDispatch();

  const { loading, data, error } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);


  return (
    <>
      <div className='m-4 md:mx-auto md:container'>
        <Button onClick={() => navigate(-1)} size="xs" color="light">
          <div className='w-5 m-1'>
            <ArrowLeftIcon />
          </div>
          Back
        </Button>
      </div>
      {
        loading ? <Loading /> : error ? <Message color='failure'>{error}</Message> : <div className="container flex flex-col items-center justify-between mx-auto mb-4 md:flex-row">
          <div className="flex-1 mb-10 md:mb-0">
            <div className='m-auto w-80'>
              <img src={data?.avatar} alt={data?.name} />

            </div>
          </div>
          <div className="flex-1 mx-10 md:mx-0">
            <h5 className="text-4xl font-bold">
              {data?.name}
            </h5>

            <h6 className='mt-2 mb-4 text-xl font-semibold'>Category: {data?.category}</h6>


            <span className="text-2xl font-bold text-gray-900">
              ${data?.price}
            </span>

            <p className="mt-2 mb-4 font-normal text-gray-700">{data?.description}</p>

            <Button size="xs" color="dark"> Add to favorites
              <div className='w-5 m-1'>
                <HeartIcon />
              </div>
            </Button>
          </div>
        </div>
      }
    </>
  )
}

export default ProductScreen
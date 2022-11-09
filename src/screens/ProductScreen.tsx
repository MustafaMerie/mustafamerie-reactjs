import productsData from '../data/productsData.json'
import { useParams, useNavigate } from "react-router-dom";
import { Button } from 'flowbite-react'
import { HeartIcon } from '@heroicons/react/24/outline'
// import { HeartIcon as SolidHeartIcon } from '@heroicons/react/20/solid'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

function ProductScreen() {

  const params = useParams()
  const navigate = useNavigate()


  // For building the UI perpose. should be removed later.
  const product = productsData.products.filter(p => p._id === params.id)
  const { name, avatar, description, price, category } = product[0]

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
      <div className="container flex flex-col items-center justify-between mx-auto mb-4 md:flex-row">
        <div className="flex-1 mb-10 md:mb-0">
          <div className='m-auto w-80'>
            <img src={avatar} alt={name} />

          </div>
        </div>
        <div className="flex-1 mx-10 md:mx-0">
          <h5 className="text-4xl font-bold">
            {name}
          </h5>

          <h6 className='mt-2 mb-4 text-xl font-semibold'>Category: {category}</h6>


          <span className="text-2xl font-bold text-gray-900">
            ${price}
          </span>

          <p className="mt-2 mb-4 font-normal text-gray-700">{description}</p>

          <Button size="xs" color="dark"> Add to favorites
            <div className='w-5 m-1'>
              <HeartIcon />
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductScreen
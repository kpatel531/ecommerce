import React from 'react'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { Link } from 'react-router-dom'
import { valideURLConvert } from '../utils/valideURLConvert'
import { pricewithDiscount } from '../utils/PriceWithDiscount'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useGlobalContext } from '../provider/GlobalProvider'
import AddToCartButton from './AddToCartButton'

const CardProduct = ({data}) => {
    const url = `/product/${valideURLConvert(data.name)}-${data._id}`
    const [loading,setLoading] = useState(false)
  
  return (
    <Link to={url} className='border py-2 lg:p-4 grid gap-1 lg:gap-3 min-w-36 lg:min-w-52 rounded cursor-pointer bg-white' >
      <div className='min-h-20 w-full max-h-24 lg:max-h-32 rounded overflow-hidden'>
            <img 
                src={data.image[0]}
                className='w-full h-full object-scale-down lg:scale-125'
            />
      </div>
      <div className='px-2 lg:px-0 font-medium text-ellipsis text-sm lg:text-base line-clamp-2'>
        {data.name}
      </div>

      <div className='flex items-center gap-1'>
        <div className='font-medium'>
            <span className='text-red-500'>{DisplayPriceInRupees(pricewithDiscount(data.price,data.discount))} </span>
            {
              data.discount > 0 && (
                <span className='text-gray-500 text-sm line-through'>{DisplayPriceInRupees(data.price)}</span>
              )
            }
        </div>
      </div>

      <div className='px-2 lg:px-0 items-center'>
        {
          data.stock == 0 ? (
            <p className='text-red-500 text-sm text-center'>Out of stock</p>
          ) : (
            <AddToCartButton data={data} />
          )
        }
          
      </div>

    </Link>
  )
}

export default CardProduct
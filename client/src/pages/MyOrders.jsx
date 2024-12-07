import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'

const MyOrders = () => {
  const orders = useSelector(state => state.orders.order)

  return (
    <div>
      <div className='bg-white shadow-md p-3 font-semibold'>
        <h1>Order</h1>
      </div>
      {
        !orders[0] && (
          <NoData/>
        )
      }
      <div className='p-4 bg-blue-50'>
        <div className='min-h-[55vh]'>
          <div key="group" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {
              orders.map((order,index)=>{
                return(
                  <div key={order._id+index+"order"} className='order p-4 bg-white rounded'>
                      <p><span className='font-bold'>Order No : </span><span className='font-normal'>#{order?.orderId}</span></p>
                      <div className='flex gap-3'>
                        <img
                          src={order.product_details.image[0]} 
                          className='w-14 h-14'
                        />
                        <p className='font-normal'>{order?.product_details?.name}</p>
                      </div>
                      <p><span className='font-bold'>Total: </span><span className='font-normal'>{DisplayPriceInRupees(order?.totalAmt)}</span></p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrders
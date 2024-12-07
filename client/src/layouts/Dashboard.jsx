import React from 'react'
import UserMenu from '../components/UserMenu'
import { Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const user = useSelector(state => state.user)

  const location = useLocation()
  
  return (
    <section className='bg-white'>
      <div className='container mx-auto p-3 grid lg:grid-cols-[250px,1fr]  '>
        {/**left for menu */}
        <div className='py-4 sticky top-24 max-h-[calc(100vh-96px)] overflow-y-auto hidden lg:block border-r'>
            <UserMenu/>
        </div>


        {/**right for content */}
        <div className='bg-white min-h-[75vh] '>
          {
            (location.pathname == "/dashboard" || location.pathname == "/dashboard/") ? 
              <div className='w-full container mx-auto px-4 py-4'>
                <h2 className='font-semibold text-3xl'>Dashboard</h2>
                <h4 className='font-medium text-red-500 text-2xl'>Welcome {user.name} for eCommerce Admin</h4>
              </div>
            : <Outlet/>
          }
        </div>
      </div>
    </section>
  )
}

export default Dashboard
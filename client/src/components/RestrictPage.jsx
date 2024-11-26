import React from 'react'
import restrictedLogo from '../assets/resricted_page.png'

const RestrictPage = () => {
  return (
    <>
    <div className='flex h-screen justify-center items-center'>
      <img
        src={restrictedLogo}
        alt='restrict area'
        className='w-52 h-52' 
      />
    </div>
    </>
  )
}

export default RestrictPage

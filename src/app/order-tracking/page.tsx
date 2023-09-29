import React from 'react'

type Props = {}

function page({ }: Props) {
  return (
    <div className='container py-14'>
      <p className='text-[16px]'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
      <div className='flex flex-wrap lg:flex-nowrap items-center gap-4 mt-3'>
        <div className='w-full lg:w-1/2'>
          <span className='text-sm '>Order ID</span>
          <input placeholder='Found in your order confirmation email.' type="text" className='border mt-1 border-neutral-400 placeholder:text-xs focus:outline-none rounded-md w-full p-2' />
        </div>
        <div className='w-full lg:w-1/2'>
          <span className='text-sm '>Billing email</span>
          <input placeholder='Email you used during checkout.' type="text" className='border mt-1 border-neutral-400 placeholder:text-xs focus:outline-none rounded-md w-full p-2' />
        </div>
      </div>
      <div>
        <button className='p-2 px-3 bg-blue-1000 rounded-md  mt-3 text-white  font-medium text-sm'>Track</button>
      </div>
    </div>
  )
}

export default page
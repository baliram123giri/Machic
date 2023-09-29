"use client"
import React from 'react'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2'

type Props = {}

function AddProductToCart({ }: Props) {
    return (
        <div className='border border-gray-200 rounded-md '>
            <div className='flex items-center flex-wrap xl:flex-nowrap  p-4 py-5'>
                <div className='w-full lg:w-full gap-4 items-center flex text-sm  md:w-1/2'>
                    <div className='flex lg:w-1/2 xl:w-auto border items-center gap-8 p-2 py-3 rounded-md border-gray-200 shadow'>
                        <AiOutlineMinus className="cursor-pointer" /> <h4>{1}</h4> <AiOutlinePlus className="cursor-pointer" />
                    </div>
                    <button className='bg-green-500  lg:w-1/2 xl:w-auto hover:bg-green-600 rounded-md px-5 py-3 text-sm text-white'>ADD TO CART</button>
                </div>
                <div className='w-full  lg:w-full md:w-1/2 flex items-center gap-5'>
                    <div className='flex gap-2 items-center text-xs cursor-pointer hover:bg-gray-100 p-2'>
                        <AiOutlineHeart size={15} /> <h6 className=' text-neutral-400 '>Add to wishlist</h6>
                    </div>
                    <div className='flex gap-2 items-center text-xs cursor-pointer p-2 hover:bg-gray-100'>
                        <HiOutlineArrowPathRoundedSquare size={15} /> <h6 className=' text-neutral-400'>Compare</h6>
                    </div>
                </div>
            </div>
            <div className='mt-3 border-t border-gray-200 px-4 py-6'>
                <div className='flex items-center flex-wrap gap-5 text-sm '>
                    <div className='flex items-center gap-2'><BsBoxSeam />  <h6 className='font-medium tracking-wide'> 2-day Delivery</h6></div>
                    <h6>|</h6>
                    <h6 className='font-light'>Speedy and reliable parcel delivery!</h6>
                </div>
            </div>
        </div>
    )
}

export default AddProductToCart
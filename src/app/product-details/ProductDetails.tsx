import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { RxCheckCircled } from "react-icons/rx"
import AddProductToCart from './AddProductToCart'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import Social from '@/Components/Social/Social'
type Props = {}

function ProductDetails({ }: Props) {
    return (
        <>
            <div className='space-y-3'>
                <h1 className='text-2xl font-normal'>Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB</h1>
                <div className='flex items-center gap-2'>
                    <h6 className='text-neutral-400 text-xs'>Model: MYL92LL/A </h6>
                    <h6 className='text-neutral-400 text-xs'>|</h6>
                    <h6 className='text-neutral-400 text-xs'>SKU: BE45VGRT </h6>
                </div>
                <div className='flex items-center gap-2'>
                    <div className="flex gap-1 items-center">
                        <AiFillStar className="text-amber-400" />
                        <AiFillStar className="text-amber-400" />
                        <AiFillStar className="text-amber-400" />
                        <AiFillStar className="text-amber-400" />
                        <AiFillStar className="text-amber-400" />
                    </div>
                    <button className='border-gray-500 border rounded-sm p-1 px-2 text-xs '>1 Review</button>

                </div>
                <button className='border-gray-300 flex gap-1 items-center font-semibold rounded-md p-1 px-2 text-xs text-green-500  bg-green-50'><RxCheckCircled />In Stock</button>
                <div className='flex items-end gap-1'>
                    <h4 className="text-xl font-semibold text-red-600">$629.99</h4>
                    <h6 className="text-sm font-semibold mb-0.5 text-neutral-400 line-through">$699.99</h6>
                </div>
                <AddProductToCart />
                <div className='bg-amber-50 p-4 rounded-md flex gap-1 items-center'>
                    <LiaShoppingBagSolid className="text-amber-700" /><h6 className='text-amber-700 font-semibold text-sm'>Other people want this <span className='font-normal'>30 people have this in their carts right now.</span></h6>
                </div>


            </div>
            <div className='flex items-center gap-1 my-5'><span>Categories</span> <span className='text-xs text-blue-500'><a href="/" className='hover:underline'>Apple, </a> <a href="/" className='hover:underline'>Cell Phones</a></span></div>
            <div className='my-5'>
                <Social />
            </div>
        </>

    )
}

export default ProductDetails
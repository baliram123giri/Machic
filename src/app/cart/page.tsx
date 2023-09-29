
import Image from 'next/image'
import React from 'react'
import photo from "@/assets/product-2-150x150.jpg"
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
type Props = {}



export default function page({ }: Props) {
    return (
        <div className='container py-8 lg:py-14'>
            <div className='flex flex-wrap lg:flex-nowrap gap-10'>
                <div className='w-full lg:w-3/4'>
                    <div className='border rounded-md bg-white p-3'>
                        <span className='text-[14px]'>Add <span className='text-red-600 font-medium'>$311.33</span> to cart and get free shipping!</span>
                        <div className='w-full rounded-full h-1.5 my-3 bg-blue-50'>
                            <div className='bg-red-600 w-[75%] rounded-full h-full'></div>
                        </div>
                    </div>
                    {/* //table  */}
                    <div className='mt-14 mb-5'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-b border-neutral-500 w-full'>
                                    <th className='text-xs px-3 text-neutral-400 text-start lg:w-3/5 ps-[70px] pb-2 lg:ps-[83px]'>Product</th>
                                    <th className='text-xs px-3 hidden lg:table-cell text-neutral-400 text-start pb-2 '>Price</th>
                                    <th className='text-xs px-3 hidden lg:table-cell text-neutral-400 text-start pb-2 '>Quantity</th>
                                    <th className='text-xs px-3 hidden lg:table-cell text-neutral-400 text-start pb-2 '>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b w-full my-10'>
                                    <td className='text-start'>
                                        <div className='flex gap-4  items-center'>
                                            <div>
                                                <Image width={65} height={65} src={photo} alt='prpoduct' />
                                            </div>
                                            <h4 className='font-light text-xs text-neutral-700 tracking-wide lg:text-sm'>
                                                Apple iPhone 11 64GB Yellow Fully Unlocked
                                            </h4>
                                        </div>
                                    </td>
                                    <td className='text-start p-3 hidden lg:table-cell'>
                                        <div className='flex gap-1 items-center'>
                                            <h4 className='font-medium text-neutral-400 text-sm'>
                                                $478.67
                                            </h4>
                                        </div>
                                    </td>
                                    <td className='text-start p-3 hidden lg:table-cell'>
                                        <div className='border rounded-sm py-1 flex shadow-sm items-center gap-4 justify-center bg-white'>
                                            <AiOutlineMinus className="text-neutral-400 cursor-pointer text-sm" /> <span className='font-medium text-sm'>2</span> <AiOutlinePlus className="text-neutral-400 cursor-pointer text-sm" />
                                        </div>
                                    </td>
                                    <td className='text-start p-3 hidden lg:table-cell'>
                                        <h4 className='text-sm font-medium '>$438.67</h4>
                                    </td>
                                    <td className='text-start p-3'>
                                        <div className='text-xs cursor-pointer'><AiOutlineClose /></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* //coupon code */}
                    <div className='pb-3 gap-2 flex flex-wrap lg:flex-nowrap items-center justify-between border-b'>
                        <div className='flex gap-5  items-center w-full lg:w-3/4'>
                            <input placeholder='Coupon code' type="text" className='focus:outline-none w-[60%] border rounded-md text-xs px-2 py-3' />
                            <button className='bg-blue-1000 ms-auto lg:ms-0 text-white rounded-md text-xs font-bold py-3 px-5'>Apply Coupon</button>
                        </div>
                        <button className='bg-blue-1000 w-full lg:w-auto  text-white rounded-md text-xs font-bold py-3 px-5'>Remove All</button>
                    </div>
                </div>
                <div className='w-full lg:w-3/12'>
                    <div>
                        <h4 className='text-blue-1000 font-bold'>CART TOTALS</h4>
                        <div className='flex mt-10 justify-between items-center pb-3 border-b border-neutral-300 '>
                            <h6 className='text-sm font-semibold'>Subtotal</h6>
                            <h6 className='text-sm font-light'>$438.67</h6>
                        </div>
                        <div className='flex justify-between items-center pb-3 border-b border-neutral-300 '>
                            <h6 className='text-sm font-semibold'>Shipping</h6>
                            <div className='my-4 space-y-2 text-end'>
                                <div className='flex items-center gap-1'>
                                    <label htmlFor='rate' className='text-[13px] font-light'>Flate rate: $15.00</label>
                                    <input type="radio" id='rate' name='rate' value={"rate"} />
                                </div>
                                <div className='flex  justify-end items-center gap-1'>
                                    <label htmlFor='local' className='text-[13px] font-light'>Local pickup</label>
                                    <input type="radio" id='local' name='rate' value={"local"} />
                                </div>
                                <h6 className='text-[13px]'>Shipping to <span className='font-bold'>NY.</span></h6>
                                <button className='text-sm mt-2 text-blue-600'>Change address</button>
                            </div>
                        </div>
                        <div className='flex mt-10 justify-between items-center pb-3 border-b border-neutral-300 '>
                            <h6 className='text-sm font-semibold'>Total</h6>
                            <h6 className='text-sm font-light'>$438.67</h6>
                        </div>
                        <button className='bg-blue-1000 w-full mt-3 text-white rounded-md text-sm font-bold py-3 px-5'>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Image from 'next/image'
import React from 'react'
import photo from "@/assets/product-2-150x150.jpg"
import { AiOutlineClose } from 'react-icons/ai'
type Props = {}



export default function page({ }: Props) {
    return (
        <div className=' mx-2 lg:mx-auto lg:w-[85%]  '>
            <div className='my-14'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-neutral-500 w-full'>
                            <th className='text-xs px-3 text-neutral-400 text-start lg:w-2/5 ps-[70px] pb-2 lg:ps-[83px]'>Product</th>
                            <th className='text-xs px-3 hidden lg:table-cell text-neutral-400 text-start pb-2 '>Price</th>
                            <th className='text-xs px-3 hidden lg:table-cell text-neutral-400 text-start pb-2 '>Date Added</th>
                            <th className='text-xs px-3 hidden lg:table-cell text-neutral-400 text-start pb-2 '>Stock</th>
                            <th className='text-xs px-3 text-neutral-400 text-start pb-2 w-[40%] lg:w-auto'>Add to cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b w-full my-14'>
                            <td className='text-start'>
                                <div className='flex gap-4  items-center'>
                                    <div>
                                        <Image width={65} height={65} src={photo} alt='prpoduct' />
                                    </div>
                                    <h4 className='font-medium text-xs text-neutral-700 tracking-wide lg:text-sm'>
                                        Apple iPhone 11 64GB Yellow Fully Unlocked
                                    </h4>
                                </div>
                            </td>
                            <td className='text-start p-3 hidden lg:table-cell'>
                                <div className='flex gap-1 items-center'>
                                    <h4 className='font-medium text-neutral-700  line-through text-sm'>
                                        $478.67
                                    </h4>
                                    <h4 className='font-medium text-neutral-700   underline text-sm'>
                                        $478.67
                                    </h4>
                                </div>
                            </td>
                            <td className='text-start p-3 hidden lg:table-cell'>
                                <h4 className='text-sm font-light '>September 13, 2023</h4>
                            </td>
                            <td className='text-start p-3 hidden lg:table-cell'>
                                <h4 className='text-sm font-light '>In Stock</h4>
                            </td>
                            <td className='text-start p-3 py-3'>
                                <button className='bg-green-500 cursor-pointer text-white font-semibold text-xs lg:text-sm px-5 py-2 rounded-md'>Add to cart</button>
                            </td>
                            <td className='text-start p-3'>
                                <div className=' rounded-full w-5 h-5 p-1 cursor-pointer bg-red-500 text-xs flex items-center justify-center'><AiOutlineClose color="white" /></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
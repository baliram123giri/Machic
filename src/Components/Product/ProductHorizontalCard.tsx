import Image from 'next/image'
import React from 'react'
import photo from "@/assets/single-1-400x400.jpg";
import { AiFillStar } from 'react-icons/ai';
type Props = {}

const ProductHorizontalCard = (props: Props) => {
    return (
        <div className='border p-4 rounded-md flex items-center gap-4'>
            <div className='relative'>
                <Image width={170} src={photo} alt='photo1' />
                <div className='absolute left-0 top-0'>
                    <h6 className='p-1 px-3 rounded-full bg-red-500 text-white font-semibold text-xs'>26%</h6>
                </div>
            </div>
            <div className="space-y-3">
                <h6 className="text-[13px] font-semibold text-neutral-700">
                    Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                </h6>
                <div className="flex">
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-[15px] font-semibold text-red-600">$629.99</h4>
                    <h6 className="text-[13px] font-semibold text-neutral-400 line-through">$699.99</h6>
                </div>
                <div className='bg-neutral-100 rounded-full h-1.5 w-[80%]'>
                    <div className='bg-amber-400 rounded-full h-1.5 w-[75%]'></div>
                </div>
                <div className="flex justify-between items-center w-[80%]">
                    <span className='text-neutral-400 text-xs'>Availbale: <span className='text-black font-semibold'>56</span></span>
                    <span className='text-neutral-400 text-xs'>Sold: <span className='text-black font-semibold'>12</span></span>
                </div>
            </div>
        </div>
    )
}

export default ProductHorizontalCard
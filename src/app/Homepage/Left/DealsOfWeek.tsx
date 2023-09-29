
import React from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import photo from "@/assets/noise3-400x400.jpeg"
import Image from 'next/image'
import CountdownTimer from '@/Components/CountdownTimer/CountdownTimer'

type Props = {}

const DealsOfWeek = (props: Props) => {
    // Random component
    const Completionist = () => <span>You are good to go!</span>;
    return (
        <div>
            <h4>Deals of the week!</h4>
            <div className='border p-4 bg-white mt-2 shadow'>
                <div className="flex items-center  justify-center flex-col border-b pb-3 relative">
                    <Image width={150} src={photo} alt="product" />
                    <div className="absolute top-[3%] w-full  left-0 flex justify-between">
                        <div className="percent">
                            <button className="bg-red-600 text-white rounded-full p-1 px-3 text-xs font-semibold">11%</button>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <button className="border text-neutral-700 rounded-full p-2 text-xs font-semibold">
                                <AiOutlineHeart size={18} />
                            </button>
                            <button className="border  text-amber-400 rounded-full p-2 text-xs font-semibold">
                                <AiFillStar size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="space-y-3 text-center w-3/4 mx-auto">
                        <h6 className="text-[13px] font-semibold text-blue-600">
                            Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                        </h6>
                        <div className="flex justify-center items-center">
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <h4 className="text-[15px] font-semibold text-red-600">$629.99</h4>
                            <h6 className="text-[13px] font-semibold text-neutral-400">$699.99</h6>
                        </div>
                        <span className="text-xs text-neutral-500">2-day Delivery</span>
                    </div>
                </div>
                <div className='text-center space-y-2 my-3'>
                    <CountdownTimer />
                    <span className='text-gray-500 text-xs'>Remains until the end of the offer</span>
                </div>
            </div>

        </div>
    )
}

export default DealsOfWeek
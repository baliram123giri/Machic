import React from 'react'
import phone from "@/assets/banner-3.jpg"
type Props = {}

const SupperDiscount = (props: Props) => {
    return (
        <div className='border pt-14 h-[500px]' style={{ background: `url(${phone.src})`, backgroundSize: "cover" }}>
            <div className='w-3/4 mx-auto space-y-3'>
                <h6 className='text-xs font-normal tracking-wider text-blue-600 uppercase'>Supper Discount</h6>
                <h1 className='text-2xl font-semibold'>New Phone 11</h1>
                <p className='text-sm font-light'>Don't miss the last opportunity.</p>
                <button className='bg-blue-600 font-semibold rounded-full text-[10px] py-2  px-6 text-white block mt-2'>Shop Now</button>
            </div>
        </div>
    )
}

export default SupperDiscount
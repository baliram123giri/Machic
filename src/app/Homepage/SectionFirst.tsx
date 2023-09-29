
import React from 'react'
import { brandImg, leftMenu } from './HomeBanner'
import BannerImg from "@/assets/slider-banner-1.jpg"

import Image from 'next/image'
const SectionFirst = () => {
    return (
        <section>
            <div className=''>
                <div className='w-full ms-auto lg:w-[80%]  bg-green-200 m-2'>
                    <div className='flex items-center py-14 lg:h-full w-full' style={{ background: `url(${BannerImg.src})`, backgroundSize: "cover" }}>
                        <div className='w-1/2 h-1/2 lg:ps-10 ps-5 space-y-1 lg:space-y-3'>
                            <button className='bg-amber-400 rounded-full text-[10px] lgtext-xs  p-1 px-2 '>WEEKEND DISCOUNT</button>
                            <h1 className='text-xl lg:text-4xl font-light tracking-widest'>Enhance Your </h1>
                            <h5 className=' text-xl lg:text-5xl font-semibold'>Entertainment</h5>
                            <div>
                                <span className='text-xs lg:text-xl font-light'>Last Call for upto <span className='text-red-600 text-xl lg:text-3xl font-semibold'>%20</span> Off!</span>
                                <button className='bg-blue-600 font-semibold rounded-full text-[13px] py-2  px-10 text-white block mt-2 lg:mt-8'>Shop Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* //brand  */}
            <div className='flex flex-wrap lg:flex-nowrap  justify-between items-center border-b py-5 '>
                {brandImg.map((ele, i) => <div key={i} className='lg:w-1/4 w-1/3 flex justify-around'><Image className='opacity-[0.3] hover:opacity-100 cursor-pointer' src={ele} alt='' width={100} height={40} /></div>)}
            </div>
        </section>
    )
}

export default SectionFirst
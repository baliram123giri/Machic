import React from 'react'
import banner1 from "@/assets/banner-box.jpg"
import banner2 from "@/assets/banner-2.jpg"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import ProductCard from '@/Components/Product/ProductCard'
import Deals from '../Deals'
type Props = {}

const Banners = (props: Props) => {
    return (
        <div>
            <div className='flex flex-wrap sm:flex-nowrap gap-3'>
                <div className='space-y-2 py-10 p-5 pt-10 lg:max-h-[200px] border w-full lg:w-1/2' style={{ background: `url(${banner1.src})` }}>
                    <h6 className='text-xs font-normal tracking-wider text-blue-500 uppercase'>Weekend Discount</h6>
                    <h1 className='text-2xl font-semibold'>Home Speaker</h1>
                    <p className='text-sm font-light'>Don't miss the last opportunity.</p>
                    <button className='bg-blue-600 font-semibold rounded-full text-[10px] py-2  px-6 text-white block mt-8'>Shop Now</button>
                </div>
                <div className='space-y-2 p-5 pt-10 max-h-[200px] border w-full lg:w-1/2' style={{ background: `url(${banner2.src})` }}>
                    <h6 className='text-xs font-normal tracking-wider text-blue-500 uppercase'>Weekend Discount</h6>
                    <h1 className='text-2xl font-semibold'>New Smartphones</h1>
                    <p className='text-sm font-light'>Don't miss the last opportunity.</p>
                    <button className='bg-blue-600 font-semibold rounded-full text-[10px] py-2  px-6 text-white block mt-8'>Shop Now</button>
                </div>
            </div>
            {/* //best sellars  */}
            <Deals title='Best Sellers' />
            {/* //products  */}
            <div className="my-3 flex-wrap flex xl:flex-nowrap gap-2">
                <div className='w-full sm:w-[49%] xl:w-3/12'>   <ProductCard /></div>
                <div className='w-full sm:w-[49%] xl:w-3/12'>   <ProductCard /></div>
                <div className='w-full sm:w-[49%] xl:w-3/12'>   <ProductCard /></div>
                <div className='w-full sm:w-[49%] xl:w-3/12'>   <ProductCard /></div>
            </div>
        </div>

    )
}

export default Banners
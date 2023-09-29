
import * as React from "react";
import photo1 from "@/assets/banner-31.jpg"
import photo2 from "@/assets/banner-32.jpg"
import photo3 from "@/assets/banner-33.jpg"
import FilterLayout from "./FilterLayout";
import FilterList from "./FilterList";
import ProductCard from "@/Components/Product/ProductCard";
type Props = {}

function page({ }: Props) {
    return (
        <div className='container py-5'>
            {/* //banner  */}
            <div className='bg-neutral-100 gap-3 p-5 mb-3 flex flex-wrap lg:flex-nowrap items-center justify-between'>
                <div className='flex flex-wrap lg:flex-nowrap items-center gap-2'>
                    <h3 className='font-light text-[17px]'>SHOP AND</h3>
                    <button className='bg-amber-400 text-[17px] font-[400] px-2 rounded-full'>SAVE BIG ON HOTTEST</button>
                    <h3 className='font-light text-[17px]'> PRODUCTS</h3>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap items-center gap-3 lg:gap-8'>
                    <div className='lg:text-end'>
                        <div>
                            <span className='text-sm font-semibold'>from</span>
                            <span className='text-red-600 text-2xl font-bold'> $79.00</span>
                        </div>
                        <p className='text-xs text-gray-400 mt-2'>Don't miss this special opportunity today.</p>
                    </div>
                    <button className='bg-blue-600 font-semibold rounded-full text-[10px] py-2  px-6 text-white block '>Shop Now</button>
                </div>
            </div>
            {/* //deals  */}
            <div className='flex flex-wrap gap-2 justify-between'>
                <div style={{ background: `url(${photo1.src})`, backgroundSize: "cover" }} className='cursor-pointer w-full lg:w-[32.33%]  space-y-7 px-5 py-8'>
                    <div>
                        <p className='text-xs font-light tracking-wide'>
                            Maecenas non erat
                        </p>
                        <h3 className='font-semibold text-2xl'>Headphones</h3>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xs text-neutral-500'>
                            Weekend Discount
                        </p>
                        <div><span className='text-red-600 font-semibold text-xl'>$299.00</span> <span className='text-neutral-500 text-sm ps-1 line-through'>$399.00</span></div>
                    </div>
                </div>

                <div style={{ background: `url(${photo2.src})`, backgroundSize: "cover" }} className='cursor-pointer w-full lg:w-[32.33%]  space-y-7 px-5 py-8'>
                    <div>
                        <p className='text-xs font-light tracking-wide'>
                            Maecenas non erat
                        </p>
                        <h3 className='font-semibold text-2xl'>Cell Phones</h3>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xs text-neutral-500'>
                            Weekend Discount
                        </p>
                        <div><span className='text-red-600 font-semibold text-xl'>$299.00</span> <span className='text-neutral-500 text-sm ps-1 line-through'>$399.00</span></div>
                    </div>
                </div>

                <div style={{ background: `url(${photo3.src})`, backgroundSize: "cover" }} className='cursor-pointer w-full lg:w-[32.33%]  space-y-7 px-5 py-8'>
                    <div>
                        <p className='text-xs font-light tracking-wide'>
                            Maecenas non erat
                        </p>
                        <h3 className='font-semibold text-2xl'>Accessories</h3>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xs text-neutral-500'>
                            Weekend Discount
                        </p>
                        <div><span className='text-red-600 font-semibold text-xl'>$299.00</span> <span className='text-neutral-500 text-sm ps-1 line-through'>$399.00</span></div>
                    </div>
                </div>
            </div>

            {/* //slug */}
            <div className='my-3'>
                <span className='text-xs'>Home / <span className='font-semibold'>Cell Phones</span></span>
            </div>
            {/* //results  and layouts  */}
            <div className='mt-3 flex flex-wrap items-center justify-between border-b pb-4'>
                <span className="block">Showing 1–16 of 17 results</span>
                <div className="lg:w-1/2 w-full flex lg:justify-end">
                    <FilterLayout />
                </div>
            </div>
            {/* //products and  filters  */}
            <div className="flex gap-3  ">
                <div className=" hidden lg:block w-3/12 border-r ">
                    <FilterList />
                </div>
                <div className="w-full flex-wrap xl:w-3/4 flex justify-between my-2">
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                    <div className='w-full sm:w-[50%] xl:w-3/12'>   <ProductCard /></div>
                </div>
            </div>
        </div>
    )
}

export default page
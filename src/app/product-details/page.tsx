import React from 'react'
import ProductImageView from './ProductImageView'
import ProductDetails from './ProductDetails'
import { BsChevronRight } from 'react-icons/bs'
import { ProductTabs } from './ProductTabs'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='container'>
            <h4 className='text-xs flex items-center gap-1 my-3'>Home <BsChevronRight size={9} />
                Cell Phones <BsChevronRight size={9} />
                iPhone<BsChevronRight size={9} />
                Google Pixel 3XL 64GB Black (Unlocked) Good Condition</h4>
            <div className='flex justify-between flex-wrap'>
                <div className='w-full lg:w-[47%] border mb-2'>
                    <ProductImageView />
                </div>
                <div className='w-full lg:w-[47%] '>
                    <ProductDetails />
                </div>
            </div>
            <div>
                <ProductTabs />
            </div>
        </div>
    )
}

export default page
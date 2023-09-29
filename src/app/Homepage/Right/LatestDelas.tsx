import React from 'react'
import Deals from '../Deals'
import ProductHorizontalCard from '@/Components/Product/ProductHorizontalCard'

type Props = {}

const LatestDelas = (props: Props) => {
    return (
        <div>
            <Deals border={false} title='Latest Deals' />
            <div className='my-3 flex-wrap md:flex-nowrap flex gap-3'>
                <div className='w-full md:w-1/2'>
                    <ProductHorizontalCard />
                </div>
                <div className='w-full md:w-1/2'>
                    <ProductHorizontalCard />
                </div>
            </div>
        </div>
    )
}

export default LatestDelas
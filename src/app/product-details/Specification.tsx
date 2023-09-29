import { specificationDataType } from '@/constant'
import React from 'react'

function Specification({ title, items }: specificationDataType) {
    return (
        <div className='mt-4'>
            <h4 className='font-semibold uppercase text-sm'>{title}</h4>
            {items?.map((ele, index) => <div key={index} className='py-3 border-b text-[13px] font-light border-gray-300 flex items-center justify-between flex-wrap'>
                <div className='w-1/2'><p>{ele.name}</p></div>
                <div className='w-1/2'><p>{ele.value}</p></div>
            </div>)}
        </div>
    )
}

export default Specification
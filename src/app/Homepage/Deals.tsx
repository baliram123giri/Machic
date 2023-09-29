import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

type Props = { title: string, border?: boolean }

const Deals = ({ title, border = true }: Props) => {
    return (
        <div className={`flex items-center justify-between py-4 mt-3 ${border && "border-b"}`}>
            <h2 className='text-xl text-neutral-600'>{title}</h2>
            <button className='flex items-center gap-3 text-blue-600 text-sm'>View All <HiOutlineArrowNarrowRight /></button>
        </div>
    )
}

export default Deals
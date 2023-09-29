import React from 'react'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'

type Props = {}

export default function Search({ }: Props) {
    return (
        <div className='border md:w-[60%] w-[70%] rounded-sm md:flex justify-between hidden'>
            <Dropdown />
            <SearchBox />
            <div>
                <button className='bg-[#102C57] text-white p-2 rounded-r-sm font-semibold px-5'>Search</button>
            </div>
        </div>
    )
}
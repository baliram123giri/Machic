"use client"
import React from 'react'
import { MdSearch } from 'react-icons/md'

type Props = {}

function SearchBox({ }: Props) {
    return (
        <div className=' border-l-2  w-[80%]'>
            <div className="flex items-center mx-2">
                <MdSearch  size={22} className="text-gray-500 mt-1"/>
                <input type="text" placeholder='Search your favorite product...' className='w-full p-2 text-sm border-0 focus:outline-none placeholder:text-xs' />
            </div>
        </div>
    )
}

export default SearchBox
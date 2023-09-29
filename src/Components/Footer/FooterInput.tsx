"use client"
import React from 'react'

type Props = {}

const FooterInput = (props: Props) => {
    return (
        <div className='w-full'>
            <input type="text" placeholder='Your email address' className='border-0 bg-transparent text-black h-full w-full focus:outline-none p-2 py-3' />
        </div>
    )
}

export default FooterInput
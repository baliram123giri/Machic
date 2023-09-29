import React, { useEffect } from 'react'
import Aos from "aos"

type Props = {}

export default function Login({ }: Props) {
    useEffect(() => {
        Aos.init()
    }, [])


    return (
        <div data-aos="fade-up" data-aos-duration="4000" className='mx-4 lg:mx-10 space-y-3 '>
            <div>
                <span className='text-xs'>Username or email address *</span>
                <input type="text" className='border border-neutral-400 focus:outline-none rounded-md w-full p-2' />
            </div>
            <div>
                <span className='text-xs'>Password *</span>
                <input type="text" className='border border-neutral-400 focus:outline-none rounded-md w-full p-2' />
            </div>
            <div className='flex items-center gap-1'>
                <input type="checkbox" id='Remember' />
                <label className='text-xs' htmlFor="Remember">Remember me</label>
            </div>
            <div>
                <button className='p-2 py-3 bg-blue-1000 rounded-md w-full text-white font-medium text-sm'>Log in</button>
            </div>
        </div>
    )
}
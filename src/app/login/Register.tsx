import Aos from 'aos'
import React, { useEffect } from 'react'

type Props = {}

function Register({ }: Props) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="4000" className='mx-4 lg:mx-10 space-y-3'>
            <div>
                <span className='text-xs'>Username *</span>
                <input type="text" className='border border-neutral-400 focus:outline-none rounded-md w-full p-2' />
            </div>
            <div>
                <span className='text-xs'>Email *</span>
                <input type="email" className='border border-neutral-400 focus:outline-none rounded-md w-full p-2' />
            </div>
            <div>
                <span className='text-xs'>Password *</span>
                <input type="text" className='border border-neutral-400 focus:outline-none rounded-md w-full p-2' />
            </div>
            <div className='flex items-center gap-1'>
                <span className='text-xs'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='underline cursor-pointer hover:text-blue-500'>privacy policy.</span></span>
            </div>
            <div>
                <button className='p-2 py-3 bg-blue-1000 rounded-md w-full text-white font-medium text-sm'>Register</button>
            </div>
        </div>
    )
}

export default Register
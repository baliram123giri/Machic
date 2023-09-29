import React from 'react'

type Props = { banner: any }

function FullBanner({ banner }: Props) {
    return (
        <>
            <div className='border' style={{ background: `url(${banner})` }}>
                <div className='p-6 py-10 space-y-3'>
                    <h6 className='text-xs font-normal tracking-wider text-blue-500 uppercase'>Weekend Discount</h6>
                    <h1 className='text-2xl font-semibold'>Momentum 3 Headphone</h1>
                    <p className='text-sm font-light'>Don't miss the last opportunity.</p>
                    <button className='bg-blue-600 font-semibold rounded-full text-[10px] py-2  px-6 text-white block mt-2'>Shop Now</button>
                </div>

            </div>
        </>
    )
}

export default FullBanner
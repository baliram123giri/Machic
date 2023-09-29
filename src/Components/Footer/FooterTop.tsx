import React from 'react'
import backgroudnImg from "@/assets/footer_backgroud.png"
import FooterInput from './FooterInput'
type Props = {}

const FooterTop = (props: Props) => {
    // 
    return (
        <div className='bg-blue-950 py-10 text-white' >
            <div className='container'>
                <div className=" flex flex-col gap-5 lg:flex-row items-center ">
                    <div className='w-full lg:w-1/2'>
                        <div className='bg-white' style={{ background: `url(${backgroudnImg.src})`, width: "100%" }}>
                            <h6 className='text-xl mb-2 font-semibold'>Sign Up For Newsletters</h6>
                            <span className='text-sm text-cyan-600 font-extralight tracking-wider'>Get E-mail updates about our latest shop and <span className='text-amber-500 font-semibold'> special offers.</span></span>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <div className="flex rounded-md  bg-white">
                            <FooterInput />
                            <button className='bg-amber-500 font-semibold text-black w-24 rounded-r-md'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
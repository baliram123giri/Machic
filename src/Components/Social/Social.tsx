"use client"
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoPinterestAlt } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'

type Props = {}

function Social({ }: Props) {
    return (
        <div className='flex items-center gap-2 flex-wrap'>
            <div className='w-8 h-8 cursor-pointer bg-[#3b5998] hover:bg-[#4f6dafc2] font-bold rounded-full p-1 text-white flex items-center justify-center'>
                <BiLogoFacebook />
            </div>
            <div className='w-8 h-8 cursor-pointer bg-[#1da1f2] hover:bg-[#1da0f2cd] font-bold rounded-full p-1 text-white flex items-center justify-center'>
                <AiOutlineTwitter />
            </div>
            <div className='w-8 h-8 cursor-pointer bg-[#e60023] hover:bg-[#e6002386] font-bold rounded-full p-1 text-white flex items-center justify-center'>
                <BiLogoPinterestAlt />
            </div>
            <div className='w-8 h-8 cursor-pointer bg-[#0077b5] hover:bg-[#0076b579] font-bold rounded-full p-1 text-white flex items-center justify-center'>
                <BiLogoLinkedin />
            </div>
            <div className='w-8 h-8 cursor-pointer bg-[#25d366] hover:bg-[#25d3657b] font-bold rounded-full p-1 text-white flex items-center justify-center'>
                <FaWhatsapp />
            </div>
        </div>
    )
}

export default Social
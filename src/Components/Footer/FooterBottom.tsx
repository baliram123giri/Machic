import React from 'react'
import Logo from "@/assets/logo-dark.png"
import payment from "@/assets/payment.png"
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoFacebook } from "react-icons/bi"
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { TfiYoutube } from 'react-icons/tfi'
import { footerTags } from '@/constant'
type Props = {}

const FooterBottom = (props: Props) => {

    return (
        <div className='container py-10'>
            <div className='flex flex-wrap gap-4 items-center justify-between'>
                <Image src={Logo} width={180} height={43} alt='' />
                <div className="social-links">
                    <ul className='flex gap-4 items-center'>
                        <li className='bg-neutral-400 rounded-full p-2'>
                            <Link className='text-white font-bold' href={"/"}><BiLogoFacebook /></Link>
                        </li>
                        <li className='bg-neutral-400 rounded-full p-2'>
                            <Link className='text-white font-bold' href={"/"}><AiOutlineTwitter /></Link>
                        </li>
                        <li className='bg-neutral-400 rounded-full p-2'>
                            <Link className='text-white font-bold' href={"/"}><AiFillLinkedin /></Link>
                        </li>
                        <li className='bg-neutral-400 rounded-full p-2'>
                            <Link className='text-white font-bold' href={"/"}><AiOutlineInstagram /></Link>
                        </li>
                        <li className='bg-neutral-400 rounded-full p-2'>
                            <Link className='text-white font-bold' href={"/"}><TfiYoutube /></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='py-14 border-b'>
                {footerTags.map((ele, i) => {
                    return <span key={i} className='pr-2 text-sm'>{ele} <span className='bg-neutral-400 ms-1 mt-1 w-[2px] h-[12px] inline-block' ></span></span>
                })}
            </div>
            <div className="py-2 mt-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
                <h6 className='text-sm '>Copyright 2023 © Machic WordPress Theme. All right reserved. Powered by KLBTheme.</h6>
                <Image src={payment} alt='payment' />
            </div>
        </div>
    )
}

export default FooterBottom
import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/logo-light.png"
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { leftMenu } from '@/app/Homepage/HomeBanner'
import { FiMenu } from 'react-icons/fi'
type Props = {
    setOpen: Function
}

function MobileMenu({ setOpen }: Props) {
    return (
        <div>
            <nav className='bg-[#031624] py-4 px-2 flex items-center justify-between'>
                <div className="logo cursor-pointer">
                    <Link href={"/"}><Image src={Logo} width={150} height={43} alt='logo' /></Link>
                </div>
                <div onClick={() => setOpen(false)}><AiOutlineClose className="text-white text-2xl cursor-pointer" /></div>
            </nav>
            <Accordion defaultExpandedKeys={["1"]} variant="splitted">
                <AccordionItem key="1" aria-label="Apparment" title={<h6 className="flex items-center gap-4 ">
                    <FiMenu className="mt-1" /> App Departments
                </h6>}>
                    <ul >
                        {leftMenu.map((ele, id) => {
                            if (ele.link) {
                                return <Link onClick={()=>setOpen(false)} href={"/"} key={id} className='text-sm px-2 cursor-pointer flex py-2.5 items-center gap-4 hover:text-blue-700 border-b'>{ele.icon} {ele.title}</Link>
                            }
                            return <Link onClick={()=>setOpen(false)} href={"/"} key={id} className={`text-sm px-2 cursor-pointer flex py-2.5 items-center gap-4 hover:text-blue-700 ${id + 1 !== leftMenu.length && "border-b"}`}>{ele.icon} {ele.title}</Link>
                        })}
                    </ul>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default MobileMenu
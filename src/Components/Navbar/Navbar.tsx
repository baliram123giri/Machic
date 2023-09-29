"use client"
import React, { useState } from 'react'
import NavTop from './NavTop'
import Image from 'next/image'
import Logo from "@/assets/logo-dark.png"
import Link from 'next/link'
import Search from './Search/Search'
import Account from './Account/Account'
import Menu from './Menu/Menu'
import { MdMenu } from 'react-icons/md'
import { BiCart } from 'react-icons/bi'
import Drawer from '../Drawer/Drawer'
import MobileMenu from './MobileMenu'
type Props = {}

const Navbar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const DrawerHandler = () => {
    setOpen(true)
  }
  return (
    <nav className='md:container w-[100%] md:w-[85%] mx-auto'>
      <div className='md:hidden'>
        <Drawer open={open} setOpen={setOpen}>
          <MobileMenu setOpen={setOpen} />
        </Drawer>
      </div>
      <NavTop />
      <div className="middle py-3 md:py-0  md:mt-5 flex justify-between items-center shadow md:shadow-none">
        <div onClick={DrawerHandler} className='text-4xl md:hidden cursor-pointer'>
          <MdMenu />
        </div>
        <div className="logo cursor-pointer">
          <Link href={"/"}><Image src={Logo} width={180} height={43} alt='logo' /></Link>
        </div>
        <div className='text-3xl md:hidden cursor-pointer'>
          <Link href={"/cart"}><BiCart /></Link>
        </div>
        <Search />
        <Account />
      </div>
      <Menu />
    </nav>
  )
}
export default Navbar
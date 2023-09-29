
import Link from 'next/link'
import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

type Props = {}
type LinkTypes = {
  id: number,
  name: string,
  link: string,
}

const naTopLeftlinks: LinkTypes[] = [{
  id: 1,
  link: "/login",
  name: "About Us"
},
{
  id: 2,
  link: "/my-account",
  name: "My Account"
},
{
  id: 3,
  link: "/featured-products",
  name: "Featured Products"
},
{
  id: 4,
  link: "/wishlist",
  name: "Wishlist"
}
]

const NavTop = (props: Props) => {
  return (
    <div className='flex justify-between items-center '>
      <ul className='md:flex  w-[40%]  lg:w-[35%] xl:w-[25%] hidden justify-between py-2  items-center '>
        {naTopLeftlinks.map(({ id, link, name }) => <Link className='text-xs' key={id} href={link}>{name}</Link>)}
      </ul>
      <ul className='md:flex  w-[40%]  lg:w-[25%] hidden justify-end gap-5 py-2  items-center '>
        <Link className='text-xs' href={"/order-tracking"}>Order Tracking</Link>
        <Dropdown list={["English", "Spanish", "German"]} title='' value={'English'} />
        <Dropdown list={["USD", "INR", "GBP"]} title='' value={'INR'} />
      </ul>
    </div>
  )
}

export default NavTop
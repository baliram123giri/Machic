import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
type Props = {}

function Account({ }: Props) {
  return (
    <div className='lg:flex gap-8 hidden items-center '>
      <Link href={"/login"}>
        <div className="flex items-center gap-1">
          <AiOutlineUser size={30} className="mt-2 text-gray-600 " />
          <div>
            <span className='text-xs text-gray-500'>Sign in</span>
            <h6 className='font-semibold' style={{ lineHeight: 1 }}>Account</h6>
          </div>
        </div>
      </Link>
      <Link href={"/wishlist"}>
        <div className='relative'>
          <AiOutlineHeart size={25} className="mt-2 text-gray-600 " />
          <div className="absolute top-0 -right-3">
            <div className="flex items-center bg-amber-400  justify-center w-5 font-semibold h-5 p-1 text-xs rounded-full  top-0 ">
              1
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/cart"}>
        <div className="flex items-center gap-5">
          <div className='relative'>
            <AiOutlineShoppingCart size={25} className="mt-2 text-gray-600 " />
            <div className="absolute top-0 -right-3">
              <div className="flex items-center bg-amber-400  justify-center w-5 font-semibold h-5 p-1 text-xs rounded-full  top-0 ">
                0
              </div>
            </div>
          </div>
          <div>
            <span className='text-xs text-gray-500'>Total</span>
            <h6 className='font-semibold' style={{ lineHeight: 1 }}>$0.00</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Account
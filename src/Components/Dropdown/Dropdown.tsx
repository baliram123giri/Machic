"use client";
import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md"

type Props = {
  title?: string,
  list: string[],
  value: string
}

const Dropdown = ({ list = [], value, title }: Props) => {
  const [show, setShow] = useState(false)


  function showHanlder() {
    setShow(true)
  }
  function hideHanlder() {
    setShow(false)
  }
  return (
    <div className='relative' onMouseLeave={hideHanlder}>
      <div onMouseEnter={showHanlder} className="flex"><h6 className='text-xs cursor-pointer'>{title || value}</h6> <MdOutlineArrowDropDown /></div>
      <div className='absolute z-10'>
        {show && <ul className='flex flex-col border p-1 mt-1 px-3 gap-1.5 bg-white '>
          {list.map((ele) => <span className='text-xs cursor-pointer hover:text-blue-500' key={ele}>{ele}</span>)}
        </ul>}
      </div>
    </div>
  )
}

export default Dropdown
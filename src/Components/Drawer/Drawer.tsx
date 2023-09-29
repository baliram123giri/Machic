"use client"
import React, { useState } from 'react'

type Props = {
    children: React.ReactNode,
    open: boolean,
    setOpen: Function
}

function Drawer({ children, open, setOpen }: Props) {
    if (open)
        return (
            <div onClick={() => setOpen(false)} className={`' w-full h-[100vh] z-10 fixed bg-[#0000002b] top-0 left-0 ${open ? "block" : "hidden"}`}>
                <div onClick={(e) => e.stopPropagation()} className='w-3/5 shadow-sm  bg-white h-full border-r border-gray-100'>
                    {children}
                </div>
            </div>
        )
}

export default Drawer
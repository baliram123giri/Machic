"use client"
import { leftMenu } from '@/app/Homepage/HomeBanner'
import React from 'react'
import { useSelector } from 'react-redux'
import { layoutType } from '@/Redux/Reducer/Layout/layoutReducer'
type Props = {}

function LeftMenu({ }: Props) {
    const { appMenu } = useSelector((state: { layoutReducer: layoutType }) => state.layoutReducer)
    return (
        <div className={`${!appMenu ? "opacity-0" : "block"} absolute w-[100%] left-0 bg-white top-12 z-10`}>
            <div className={`${!appMenu && "opacity-0"} hidden  lg:block border rounded-b-md `}>
                <ul >
                    {leftMenu.map((ele, id) => {
                        if (ele.link) {
                            return <li key={id} className='text-sm px-2 cursor-pointer flex py-2.5 items-center gap-4 border-b'>{ele.icon} {ele.title}</li>
                        }
                        return <li key={id} className={`text-sm px-2 cursor-pointer flex py-2.5 items-center gap-4 ${id + 1 !== leftMenu.length && "border-b"}`}>{ele.icon} {ele.title}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default LeftMenu
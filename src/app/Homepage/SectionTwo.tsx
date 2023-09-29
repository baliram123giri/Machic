import React from 'react'
import { SiContactlesspayment } from "react-icons/si"
import { LiaShippingFastSolid } from "react-icons/lia"
import { TbTruckReturn } from "react-icons/tb"

import { LeftSide } from './Left/LeftSide'
import RightSide from './Right/RightSide'
type Props = {}

export default function SectionTwo({ }: Props) {
    return (
        <div className='my-4 flex flex-wrap'>
            <div className='hidden xl:block sm:w-1/2 xl:w-1/4'>
                <LeftSide />
            </div>
            <div className='w-full ps-3 xl:w-3/4 '>
                <RightSide />
            </div>
        </div>
    )
}
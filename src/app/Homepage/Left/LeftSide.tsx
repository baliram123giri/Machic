import React from 'react'
import ShipTrack from './ShipTrack'
import SupperDiscount from './SupperDiscount'
import DealsOfWeek from './DealsOfWeek'

type Props = {}

export const LeftSide = (props: Props) => {
    return (
        <div className='space-y-5'>
            <ShipTrack />
            <SupperDiscount />
            <DealsOfWeek />
        </div>
    )
}

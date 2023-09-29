import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { SiContactlesspayment } from 'react-icons/si'
import { TbTruckReturn } from 'react-icons/tb'

type Props = {}

export default function ShipTrack({ }: Props) {
    return (
        <div className='border'>
            <div className='flex p-4 gap-8 border-b'>
                <LiaShippingFastSolid size={30} />
                <div>
                    <h6 className='text-sm'>International Shipment</h6>
                    <p className='text-xs text-neutral-500'>Your orders are shipped seamlessly between countries</p>
                </div>
            </div>
            <div className='flex p-4 gap-8 border-b'>
                <TbTruckReturn size={30} />
                <div>
                    <h6 className='text-sm'>Extended 45 day returns</h6>
                    <p className='text-xs text-neutral-500'>You have the right to return your orders within 45 days.</p>
                </div>
            </div>
            <div className='flex p-4 gap-8'>
                <SiContactlesspayment size={30} />
                <div>
                    <h6 className='text-sm'>Secure Payment</h6>
                    <p className='text-xs text-neutral-500'>Your payments are secure with our private security network.</p>
                </div>
            </div>
        </div>
    )
}
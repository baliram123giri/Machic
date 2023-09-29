"use client"
import React from 'react'
import Stars from './Stars'

type Props = {}

export const RatingsComp = (props: Props) => {
    return (
        <div className='flex items-center'>
            <div className='flex items-center gap-2'><Stars hover number={1} /> <h6 className='text-gray-200'>|</h6></div>
            <div className='flex items-center gap-2'><Stars hover number={2} /> <h6 className='text-gray-200'>|</h6></div>
            <div className='flex items-center gap-2'><Stars hover number={3} /> <h6 className='text-gray-200'>|</h6></div>
            <div className='flex items-center gap-2'><Stars hover number={4} /> <h6 className='text-gray-200'>|</h6></div>
            <div className='flex items-center gap-2'><Stars hover number={5}/></div>
        </div>
    )
}
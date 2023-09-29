import Loader from '@/Components/Loader/Loader'
import React from 'react'

type Props = {}

function loading({ }: Props) {
    return (
        <div className='my-32'>
            <Loader />
        </div>
    )
}

export default loading
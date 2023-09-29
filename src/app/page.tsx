
import React from 'react'
import SectionFirst from './Homepage/SectionFirst'
import SectionTwo from './Homepage/SectionTwo'

type Props = {}

function page({ }: Props) {
  return (
    <div className='container'>
      <SectionFirst />
      <SectionTwo />
    </div>
  )
}

export default page
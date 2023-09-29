import Select from '@/Components/MainComponents/Select/Select'
import React from 'react'

type Props = {}
type optionType = {
  id: string,
  value: string
}

export default function Dropdown({ }: Props) {
  const options: optionType[] = [
    {
      id: "All",
      value: "All"
    },
    {
      id: "Apple",
      value: "Apple"
    },
    {
      id: "Camera & Photo",
      value: "Camera & Photo"
    },
    {
      id: "Camputer & Accessories",
      value: "Camputer & Accessories"
    },
    {
      id: "Headphones",
      value: "Headphones"
    },
    {
      id: "Smartwatchces",
      value: "Smartwatchces"
    },
    {
      id: "Sports & Outdoors",
      value: "Sports & Outdoors"
    },
    {
      id: "Telvision & Video",
      value: "Telvision & Video"
    },
    {
      id: "Videos & Games",
      value: "Videos & Games"
    },
  ]
  const onChange = () => {

  }
  return (
    <div className='p-2 w-[40px]'>
      <Select options={options} onChange={onChange} name='search' value={"All"} />
    </div>
  )
}
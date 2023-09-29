"use client"
import React, { useState } from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Select, SelectItem } from "@nextui-org/react";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { BsGrid } from 'react-icons/bs';
import { GoListUnordered } from 'react-icons/go';
type Props = {}

const data: string[] = [
    "Sort by popularity",
    "Sort by average rating", "Sort by latest",
    "Sort by price:low to high",
    "Sort by price:high to low"
]
const data2: number[] = [16, 32, 48, 64]
function FilterLayout({ }: Props) {
    const [values, setValues] = useState<string | number>("")
    const [values2, setValues2] = useState<string | number>("16 Items")

    return (
        <div className='flex items-center gap-4'>
            <div className='border-r-2 inline-block '>
                <Dropdown >
                    <DropdownTrigger >
                        <Button
                            size='sm'
                            color={"default"}
                            variant={"light"}
                            className="capitalize rounded-none"

                        >
                            {values || "SORT BY"} <MdOutlineArrowDropDown size={20} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu

                        onAction={(value) => setValues(String(value))}
                        aria-label="Dropdown Variants"
                        color={"primary"}
                        variant={"solid"}
                    >
                        {data.map((value) => <DropdownItem className={value === values ? 'bg-blue-600 text-white rounded-none hover:border-none' : "rounded-none hover:border-none"} key={value}>{value}</DropdownItem>)}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className='border-r-2 inline-block '>
                <div className='flex items-center gap-3'>
                    <h4 className='text-xs'>Show: </h4>
                    <Dropdown >
                        <DropdownTrigger >
                            <Button
                                size='sm'
                                color={"default"}
                                variant={"light"}
                                className="capitalize rounded-none"

                            >
                                {values2} <MdOutlineArrowDropDown size={20} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu

                            onAction={(value) => setValues2(String(value))}
                            aria-label="Dropdown Variants"
                            color={"primary"}
                            variant={"solid"}
                        >
                            {data2.map((value) => <DropdownItem className={value === values2 ? 'bg-blue-600 text-white rounded-none hover:border-none' : "rounded-none hover:border-none"} key={value + " Items"}>{value} Items</DropdownItem>)}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className='flex items-center gap-5 '>
                <BsGrid className="cursor-pointer hover:text-blue-700" />   
                <GoListUnordered className="cursor-pointer hover:text-blue-700" size={22} />
            </div>
        </div>

    )
}

export default FilterLayout
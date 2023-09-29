"use client"
import { APPMENU } from '@/Redux/Reducer/Layout/layoutReducer'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import LeftMenu from '../LeftMenu'

type Props = {}

function AppDepartment({ }: Props) {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch({ type: APPMENU })} className="flex relative items-center gap-10 bg-neutral-100 p-2 rounded-md cursor-pointer">
            <h6 className="flex items-center gap-4 ">
                <FiMenu className="mt-1" /> App Departments
            </h6>
            <RiArrowDropDownLine size={30} className="text-neutral-500" />
            <LeftMenu/>
        </div>
    )
}

export default AppDepartment
"use client"
import React from 'react'

type Props = { options: { id: string | number, value: any }[], value: string | number, name: string, onChange?: () => void }

const Select = ({ options, value, name, onChange }: Props) => {
    return (
        <div>
            <select aria-readonly className='text-sm focus:outline-none w-auto' onChange={onChange} defaultValue={value || ""} name={name} value={value || ""} >
                <option value="">Select {name.charAt(0).toLocaleUpperCase() + name.slice(1)}</option>
                {options?.map(({ id, value }) => <option className='text-sm' key={id} value={id}>{value}</option>)}
            </select>
        </div>
    )
}

export default Select
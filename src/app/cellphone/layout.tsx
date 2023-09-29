import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Cell Phones',
    description: 'Here you will get electronics and daily use products',
}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return children
}

export default layout
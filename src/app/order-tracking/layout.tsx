import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Order Track',
    description: 'Track your product with order id or email',
}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return children
}

export default layout
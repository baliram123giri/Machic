import React from 'react'
import "./loader.css"
type Props = {}

export default function Loader({ }: Props) {
    return (
        <div className="flex items-center justify-center">
            <div className="loader"></div>
        </div>
    )
}
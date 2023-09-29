import React from 'react'
import Banners from './Banners'
import FullBanner from '../../../Components/Product/FullBanner'
import Banner4 from "@/assets/banner-4.jpg"
import LatestDelas from './LatestDelas'
const RightSide = () => {
    return (
        <div>
            <Banners />
            <FullBanner banner={Banner4.src} />
            <LatestDelas/>
        </div>
    )
}

export default RightSide
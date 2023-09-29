"use client"
import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "@/assets/single-1-400x400.jpg"
import img2 from "@/assets/single-2.jpg"
import img3 from "@/assets/single-3.jpg"
import img4 from "@/assets/air4-768x768.jpg"
import img5 from "@/assets/air3-768x768.jpg"
type Props = {}
const images = [
    {
      original: img1.src,
      thumbnail: img1.src,
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
function ProductImageView({ }: Props) {
    return (
        <div className='p-4'><ImageGallery   showPlayButton={false} showFullscreenButton={false} showNav={false}  items={ [
          {
            original: img1.src,
            thumbnail: img1.src,
          },
          {
            original: img2.src,
            thumbnail: img2.src,
          },
          {
            original: img3.src,
            thumbnail: img3.src,
          },
          {
            original: img4.src,
            thumbnail: img4.src,
          },
          {
            original: img5.src,
            thumbnail: img5.src,
          },
         
        ]} /></div>
    )
}

export default ProductImageView
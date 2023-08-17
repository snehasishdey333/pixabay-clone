"use client"
import Image from 'next/image'
import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageCard from './ImageCard'

const Grid = () => {
    
  return (
  
<div className='md:px-6 px-2 mb-16'>
<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 4, 900: 4 }}>
                <Masonry>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                </Masonry>
        
</ResponsiveMasonry>
<p className='text-center mt-8 text-sm text-[#656f79]'>Discover more</p>
</div>


  )
}

export default Grid
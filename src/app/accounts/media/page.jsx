"use client"
import ImageCard from '@/components/ImageCard'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Media = () => {
  return (
    <div className='md:px-8 px-4 mb-16'>
    <h1 className='text-lg mt-8 mb-4'>My media</h1>
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
</div>
  )
}

export default Media
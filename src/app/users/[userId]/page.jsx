"use client"

import ImageCard from '@/components/ImageCard'
import Image from 'next/image'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const UserDetails = () => {
  return (
    <div>
        <div className='h-[30vh] w-full bg-gradient-to-b from-[#5b5b5b] to-[#ffe7c1]'>
        </div>
        <div className='relative py-4'>
            <div className='bg-white rounded-full h-28 w-28 flex justify-center items-center absolute -top-16 left-10'>
            <Image src="/pixabay assets/asset 4.jpeg" alt="" className='h-24 w-24 rounded-full' height={20} width={20} />
            </div>
            <div className='pt-[40px] md:px-8 px-4 flex flex-col space-y-2'>
            <h1 className='font-extrabold text-3xl'>snehaishdey131</h1>
            <p className='text-sm'>I am grey. I stand between the darkness and the light. Thanks for all likes! 😊</p>
            <p className='text-[#656f79] text-sm'>Joined 29 May,2023</p>
            </div>
            <div className='md:px-6 px-2 mt-8'>
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
            
        </div>
    </div>
  )
}

export default UserDetails
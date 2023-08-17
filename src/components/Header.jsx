"use client"
import React from 'react'
import Grid from './Grid'
import Image from 'next/image'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='relative w-full h-[50vh] flex justify-center items-center mb-4'>
    
    <Image src="/pixabay assets/asset 0.webp" alt="" className="object-cover h-full w-full" height={100} width={100}/>
    <div className='px-4 md:px-8 h-[50vh] absolute top-0 left-0 w-full flex justify-center items-center'>
    <div className='flex flex-col w-full md:w-[50%] space-y-4'>
     <h1 className='text-2xl text-white font-extrabold'>Stunning royalty-free images & royalty-free stock</h1>
     <p className='text-sm text-white'>Over 4.1 million+ high quality stock images, videos and music shared by our talented community.</p>
     <div className='bg-white flex items-center space-x-4 px-4 py-3 rounded-3xl'>
     <p className='cursor-pointer'><BsSearch/></p>
     <input placeholder='Search for images' type="text" className='focus:outline-none'/>

     </div>
    </div>
    </div>
    
    
    </div>
  )
}

export default Header
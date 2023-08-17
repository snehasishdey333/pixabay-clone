"use client"
import Link from 'next/link'
import React from 'react'
import { BiUpload } from 'react-icons/bi'

const Menu = () => {
  return (
    <div className='z-10 absolute pb-2 top-16 right-0 md:right-32 bg-[#191b26] shadow-sm shadow-gray-500 w-full md:w-[200px] flex space-y-4 flex-col items-start'>
    <div className='text-[#9aa2b0] md:hidden p-4 bg-[#1f2231] w-full flex justify-center items-center text-center hover:text-white text-sm'><div className='flex space-x-1 items-center'>
         <p><BiUpload/></p>
         <p>Upload</p></div>
         </div>
         <div className='flex flex-col items-start space-y-4 p-4'>

         
      <p className='text-[#9aa2b0] hover:text-white text-sm'><Link href="/users/dvasdvasd">My profile</Link></p>
      <p className='text-[#9aa2b0] hover:text-white text-sm'><Link href="/accounts/media">My media</Link></p>
      <p className='text-[#9aa2b0] hover:text-white text-sm'><Link href="/accounts/media/upload">Upload</Link></p>
      <p className='text-[#9aa2b0] hover:text-white text-sm'><Link href="/accounts/settings">Settings</Link></p>
      <p className='text-[#9aa2b0] hover:text-white text-sm'><Link href="/">Log out</Link></p>
      </div>
    </div>
  )
}

export default Menu
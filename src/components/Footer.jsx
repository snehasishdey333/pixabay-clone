import Image from 'next/image'
import React from 'react'
import {BsFacebook,BsTwitter,BsPinterest} from 'react-icons/bs'
import {BiLogoInstagram} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex flex-col w-full'>
    <div className='w-full px-8'>
      <div className='h-[1px] bg-gray-200'></div>
    </div>
    <div className='flex flex-col items-start px-8 py-12 space-y-3'>
    <div className='bg-green-100 rounded-full w-10 h-10 flex justify-center items-center'><p className='text-[#00ab6b]'><AiFillHeart/></p></div>
    <h3 className='text-md font-bold'>Free media you can use anywhere</h3>
    <p className='text-sm text-[#656f79]'>Pixabay is a vibrant community of creatives, sharing royalty-free images, videos, audio and other media. All content is released by Pixabay under the Content License, which makes it safe to use without asking for permission or giving credit to the artist - even for certain commercial purposes.</p>
    <p className='text-[#00ab6b] text-sm'>Learn more about our license</p>
    </div>
    <hr/>
   <div className='py-16 px-8 flex md:justify-between w-full justify-start flex-col md:flex-row space-y-10 md:space-y-0'>
   <div className='flex flex-col space-y-4'>
    <Image src="/pixabay assets/asset 38.svg" className="w-20 h-10" alt="logo" height={20} width={20}/>
    <p className='text-sm text-[#656f79] text-left'>Over 4.3 million+ high quality stock images, videos and music shared by our talented community.</p>
    <div className='flex items-center space-x-6'>
    <p className='text-[#191b26] hover:text-[#00ab6b] text-lg'><BiLogoInstagram/></p>
    <p className='text-[#191b26] hover:text-[#00ab6b] text-lg'><BsPinterest/></p>
    <p className='text-[#191b26] hover:text-[#00ab6b] text-lg'><BsTwitter/></p>
    <p className='text-[#191b26] hover:text-[#00ab6b] text-lg'><BsFacebook/></p>
    </div>
   </div>
   <div className='flex items-start md:space-x-8 space-x-0 space-y-4 md:space-y-0 flex-col md:flex-row'>
   <div className='flex flex-col items-start space-y-2 text-sm'>
    <h1 className='font-bold text-[#191b26]'>Discover</h1>
    <p className='text-[#656f79]'>Editor's Choice</p>
    <p className='text-[#656f79]'>Curated Collections</p>
    <p className='text-[#656f79]'>Popular Images</p>
    <p className='text-[#656f79]'>Popular Videos</p>
    <p className='text-[#656f79]'>Popular Music</p>
   </div>
   <div className='flex flex-col items-start space-y-2 text-sm'>
    <h1 className='font-bold text-[#191b26]'>Community</h1>
    <p className='text-[#656f79]'>Blog</p>
    <p className='text-[#656f79]'>Forum</p>
    <p className='text-[#656f79]'>Creators</p>
   </div>
   <div className='flex flex-col items-start space-y-2 text-sm'>
    <h1 className='font-bold text-[#191b26]'>About</h1>
    <p className='text-[#656f79]'>About Us</p>
    <p className='text-[#656f79]'>FAQ</p>
    <p className='text-[#656f79]'>Privacy Policy</p>
    <p className='text-[#656f79]'>API</p>
   </div>

   </div>

   </div>
   <div className='bg-[#f7f7f7] text-[#656f79] text-center text-sm py-6'>
   This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
   </div>
    </div>
  )
}

export default Footer
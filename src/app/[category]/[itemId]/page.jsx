import Comment from '@/components/Comment'
import Image from 'next/image'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const ItemPage = () => {
  return (
    <div className='flex flex-col md:px-8 px-4 py-6 w-full space-y-6'>
        {/* profile bar */}
        <div className='flex justify-between items-center '>
        <div className='flex flex-row items-center space-x-4'>
        <Image src="/pixabay assets/asset 4.jpeg" alt="" className='h-10 w-10 rounded-full' height={20} width={20} />
        <h3 className='text-black font-extrabold text-sm'>Sneahsish</h3>
        </div>
        <button className='text-white bg-[#00ab6b] hover:bg-[#14bc7d] px-3 py-2 rounded-3xl text-sm md:text-md'><div className='flex space-x-1 items-center'>
         <p>Download</p>
         <p><BsChevronDown/></p>
        </div></button>
        </div>

        {/* item box */}
        <div>
        <div className='w-full flex flex-col items-center justify-center h-[45vh] my-4'>
          <Image src="/pixabay assets/asset 21.jpeg" alt="item" className='h-full w-auto' height={200} width={200}/>
        </div>
        <h3 className='text-sm'>Beautiful Scenery</h3>
        </div>

        {/* comment and profile space */}
        <div className='flex space-x-16 md:flex-row flex-col md:justify-between md:items-start'>
            {/* comments */}
            
            <div className='md:w-[60%] w-full'>
            <h3 className='font-extrabold text-lg mb-4'>24 comments</h3>
                <div className='flex flex-row justify-start space-x-4 w-full'>
                <Image src="/pixabay assets/asset 4.jpeg" alt="" className='h-10 w-10 rounded-full' height={20} width={20} />
                <div className='bg-[#f2f2f2] w-full space-y-4 flex-flex-col items-start rounded-xl p-4'>
                <input placeholder='Add your comments...' className='text-sm bg-[#f2f2f2] focus:outline-none w-full py-4 px-4'/>
                <button className='bg-white text-sm font-bold rounded-3xl px-3 py-2 border-[2px] border-gray-300'>Comment</button>
                </div>
                </div>

                <Comment/>
                <Comment/>
                <Comment/>
            </div>

            {/* profile */}
            <div className='md:w-[40%] w-full flex flex-col items-start space-y-4'>
            <h3 className='font-extrabold text-lg'>About the creator</h3>
            <div className='flex flex-row items-center space-x-4'>
            <Image src="/pixabay assets/asset 4.jpeg" alt="" className='h-10 w-10 rounded-full' height={20} width={20} />
            <h3 className='text-black font-extrabold text-sm'>Sneahsish</h3>
            </div>
            <p className='text-sm'>Hello this is snehasish dey and this is my bio.</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default ItemPage
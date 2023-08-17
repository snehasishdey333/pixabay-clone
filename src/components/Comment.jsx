import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
    <div className='flex flex-row justify-start space-x-4 w-full items-center my-2'>
      <Image src="/pixabay assets/asset 4.jpeg" alt="" className='h-10 w-10 rounded-full' height={20} width={20} />
      <div className=' w-full space-y-2 flex-flex-col items-start rounded-xl p-2'>
      <div className='flex items-center space-x-4 '>
      <h1 className='font-bold text-sm'>John</h1>
      <p className='text-[#656f79] text-xs'>17 hours ago</p>
      </div>
       <h1 className='text-xs'>Nice image!</h1>
      </div>
    </div>                                             
  )
}

export default Comment
import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
  return (
    <div className='w-full p-2 relative group'>
    <Image src="/pixabay assets/asset 18.webp" className="group-hover:brightness-75 w-full object-cover" height={100} width={100} alt=""/>
    <div class="p-8 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 text-sm text-white">Beautiful Flower</div>
    </div>
  )
}

export default ImageCard
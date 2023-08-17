"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {BiUpload} from 'react-icons/bi'
import Menu from './Menu'

const Navbar = () => {
  const router=useRouter()
  const user=true
  const [menu,setMenu]=useState(false)
  const [scroll,setScroll]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>0){
        setScroll(true)
      }else{
        setScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className={scroll?'bg-white transition-all ease-in sticky top-0 z-10 flex justify-between items-center md:px-8 md:py-4 px-4 py-3 w-full':'bg-opacity-0 absolute top-0 z-10 flex justify-between items-center md:px-8 md:py-4 px-4 py-3 w-full'}>
       <div className='bg-white px-4 rounded-3xl hidden md:block'><Image onClick={()=>{router.push("/")}} src="/pixabay assets/asset 38.svg" alt="" className="cursor-pointer w-20 h-10 hidden md:block" height={20} width={20}/></div>
       <Image onClick={()=>{router.push("/")}} src="/pixabay assets/asset 39.svg" alt="" className="cursor-pointer w-10 h-10 block md:hidden" height={20} width={20}/>
       <div className='flex items-center space-x-6'>
        {user?  <>
          <Image onClick={()=>setMenu(!menu)} src="/pixabay assets/asset 4.jpeg" alt="" className='relative h-8 w-8 rounded-full cursor-pointer' height={8} width={8} />
          {menu && <Menu/>}
        </>:<button className='bg-[#191b26] hover:bg-[#2f313e] text-white rounded-3xl px-3 py-2 text-sm md:text-md'>Log in</button>}
        <button onClick={()=>{router.push("/accounts/media/upload")}} className='text-white bg-[#00ab6b] hover:bg-[#14bc7d] px-3 py-2 rounded-3xl text-sm md:text-md'><div className='flex space-x-1 items-center'>
         <p><BiUpload/></p>
         <p>Upload</p>
        </div></button>
       </div>
    </div>
      <hr/>
    </>
    
  )
}

export default Navbar
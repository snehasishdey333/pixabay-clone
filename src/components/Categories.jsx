"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {AiFillHome,AiFillCamera} from 'react-icons/ai'
import {FaPaintBrush,FaPenFancy} from 'react-icons/fa'
import {BsFillCameraVideoFill} from 'react-icons/bs'

const Categories = () => {
  const path=usePathname()
  
  const [active,setActive]=useState(true)
  // const catClick=()=>{
  //   if()
  // }
    const activeLink={
      "bg":"flex items-center space-x-2 bg-gray-100 rounded-3xl px-4 py-3",
      "icon":"text-[#00ab6b] text-sm",
      "text":"text-black text-sm"
    }

    const inActiveLink={
      "bg":"flex items-center space-x-2 hover:bg-gray-100 rounded-3xl px-4 py-3",
      "icon":"text-[#656f79] text-sm",
      "text":"text-[#656f79] text-sm"
    }

    const links=[{ 
      "path":"",
      "text":"Home",
      "icon":<AiFillHome/>
    },
    { 
      "path":"photos",
      "text":"Photos",
      "icon":<AiFillCamera/>
    },
    { 
      "path":"illustrations",
      "text":"Illustrations",
      "icon":<FaPaintBrush/>
    },
    { 
      "path":"vectors",
      "text":"Vectors",
      "icon":<FaPenFancy/>
    },
    { 
      "path":"videos",
      "text":"Videos",
      "icon":<BsFillCameraVideoFill/>
    }]

    
  return (
    <div className='w-full p-4 md:p-8 flex flex-row flex-wrap items-center gap-6 justify-center '>
    {/* home */}
    {links.map((l,i)=>(
      
      <div key={i} className={path==="/"+l.path?activeLink.bg:inActiveLink.bg}>
      <Link href={"/"+l.path}>
      <p className={path==="/"?activeLink.icon:inActiveLink.icon}>{l.icon}</p>
      </Link>
      <Link href={"/"+l.path}>
      <p className={path==="/"?activeLink.text:inActiveLink.text}>{l.text}</p>
      </Link>
      </div>
      
    ))}
      {/* <div className={path==="/"?activeLink.bg:inActiveLink.bg}>
      <Link href="/">
      <p className={path==="/"?activeLink.icon:inActiveLink.icon}><AiFillHome/></p>
      </Link>
      <Link href="/">
      <p className={path==="/"?activeLink.text:inActiveLink.text}>Home</p>
      </Link>
      </div> */}

      
    </div>
  )
}

export default Categories
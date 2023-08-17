"use client"
import React from 'react'

const Settings = () => {
  return (
    <div className='min-h-full flex flex-col items-start w-full md:px-8 px-4'>
    <h1 className='text-lg mt-8 mb-4'>Personal Data</h1>
    <div className='w-full mb-8'>
      <div className='h-[2px] bg-gray-200'></div>
    </div>
    <div className='w-full flex items-center md:items-start md:justify-between md:flex-row flex-col'>
      <div className='md:px-8 md:w-[50%] w-full space-y-8 flex flex-col items-start '>
      <div className='flex flex-col md:space-y-0 space-y-4 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>Username</h3>
         <input className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
      </div>
      <div className='flex flex-col md:space-y-0 space-y-4 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>Profile Image</h3>
         <input type="file"/>
      </div>
      <div className='flex flex-col md:space-y-0 space-y-4 md:flex-row  md:items-start md:justify-start space-x-0 md:space-x-4 w-full'>
      <h3 className='text-md'>Please select</h3>
      <select className='px-2 py-2'>
        <option>------</option>
        <option>Male</option>
        <option>Female</option>
        <option>None</option>
      </select>
      
      </div>
      <div className='flex flex-col md:space-y-0 space-y-3 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>First name</h3>
         <input className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
      </div>
      <div className='flex flex-col md:space-y-0 space-y-3 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>Last name</h3>
         <input className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
      </div>
      </div>
      <div className='md:px-8 md:w-[50%] w-full space-y-8 flex flex-col items-start '>
      <div className='flex flex-col md:space-y-0 space-y-3 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>City</h3>
         <input className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
      </div>
      <div className='flex flex-col md:space-y-0 space-y-3 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>Country</h3>
         <input className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
      </div>
      <div className='flex flex-col md:space-y-0 space-y-3 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>Last name</h3>
         <input className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
      </div>
      <div className='flex flex-col md:space-y-0 space-y-3 md:flex-row  md:items-center md:justify-start space-x-0 md:space-x-4 w-full'>
         <h3 className='text-md'>About me</h3>
         <textarea className='md:w-[50%] w-full border-2 rounded-sm focus:outline-none px-2 py-2 border-gray-200 focus:border-2 focus:border-blue-400' type="text"/>
         </div>
      </div>
      
      
      </div>
      <button className='mx-auto bg-[#02be6e] px-16 rounded-3xl mt-16 mb-8 text-white py-3 hover:bg-[#2db67b]'>Save</button>
      <p className='my-4 text-xs mx-auto'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
  )
}

export default Settings
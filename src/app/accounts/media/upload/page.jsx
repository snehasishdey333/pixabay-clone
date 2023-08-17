import React from 'react'

const Upload = () => {
  return (
    <div className='w-full min-h-[50vh] md:px-40 px-4 flex justify-center items-center flex-col'>
     <div className='bg-[#f7f7f7] border-dashed border-2 rounded-md mb-24 border-gray-300 p-8 flex flex-col justify-center items-center w-full '>
     <p className='text-md font-bold'>Drag and drop media files anywhere on the page</p>
     <div className='mx-auto bg-[#02be6e] px-16 rounded-3xl mt-4 mb-8 text-white py-3 hover:bg-[#2db67b]'>
     <input className='hidden' id="file" type="file"/>
     <label for="file" className=''>Select File</label>
     </div>
     </div>
     <p className='text-center text-xs'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
  )
}

export default Upload
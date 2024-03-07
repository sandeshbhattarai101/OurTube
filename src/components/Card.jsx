import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <>
    <Link to='/video/test' >
    <div className="Container w-[360px]  mb-[45px] cursor-pointer ">
        <img className='w-full h-[202px] bg-gray-500 ' src="../../public/images/thumbnail.jpg" alt="thumbnail" />
    <div className="Details flex mt-4 gap-3 ">
    <img className='w-9 h-9 rounded-[50%]  bg-gray-500 ' src="../../public/images/thumbnail.jpg" alt="ChannelLogo" />
    <div className="Texts ">
      <h1 className='Title text-4 font-medium text-black dark:text-white '>Test Video</h1>
      <h2 className=' ChannelName text-[14px] font-medium text-[#373737] dark:text-white my-[9px] mx-0 '>Mr.Beast</h2>
      <div className='Info text-[14px]  text-[#373737] dark:text-white '>990,900 2 days ago </div>
    </div>
    </div>
    </div>
    </Link>
    </>
  )
}

import React from 'react'

export default function SignIn() {
  return (
    <>
    <div className="Container flex flex-col items-center justify-center h-[calc(100vh-56px)] text-black dark:text-white ">
        <div className="Wrapper flex flex-col items-center bg-white dark:bg-[#242424] border-[#e5e5e5] dark:border-[#313131] border-[2px] border-solid py-[20px] px-[50px] gap-[10px] ">
            <div className="Title text-[24px] ">Sign in</div>
            <div className="SubTitle text-[20px] font-light ">to continue to OurTube</div>
            <input className=' border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="text" placeholder='username' />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="password" placeholder='password' />
            <button className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf] '>Sign in</button>
            <div className="Title text-[24px]">or</div>
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="text" placeholder='username' />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="email" placeholder='email' />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="password" placeholder='password' />
            <button className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf]   '>Sign up</button>
        </div>
        <div className="More flex mt-[10px] text-[14px] text-[#6e6e6e] dark:text-[#bfbfbf] ">
            English(Nepal)
         <div className="Links ml-[40px] ">
            <span className="Link ml-[20px] ">Help</span>
            <span className="Link ml-[20px] ">Privacy</span>
            <span className="Link ml-[20px] ">Terms</span>
         </div>
        </div>
    </div>
    </>
  )
}

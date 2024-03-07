import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    < >
    <div className="Container sticky top-0 bg-[#ffffff] dark:bg-[#202020] h-[56px] ">
      <div className="Wrapper flex justify-end items-center relative h-full py-0 px-[20px] ">
        <div className="Search w-[50%] p-[5px] border-[2px] border-solid border-[#ccc] dark:border-[#606060] rounded-[5px] flex items-center justify-between absolute left-0 right-0 m-auto ">
          <input className='outline-none bg-transparent' type="text" placeholder='Search'/>
          <SearchIcon/>
        </div>
        <button className='flex items-center gap-[5px] py-[5px] px-[10px]  bg-transparent border-blue-600 border-[1px] border-solid text-blue-600 text-[xs] font-semibold rounded-[3px] '> <AccountCircleIcon fontSize='small' /> SIGN IN </button>
      </div>
    </div>
    </>
  )
}

export default Navbar
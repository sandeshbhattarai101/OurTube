import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Upload from './Upload';


function Navbar() {

 const dispatch = useDispatch();

 const [open, setOpen] = useState(false)

  const {currentUser} = useSelector((state) => state.user)

  const handleLogOut = ()=>{
    dispatch(logout());
  }

  return (
    < >
    <div className="Container sticky top-0 bg-[#ffffff] dark:bg-[#202020] h-[56px] ">
      <div className="Wrapper flex justify-end items-center relative h-full py-0 px-[20px] ">
        <div className="Search w-[50%] p-[5px] border-[2px] border-solid border-[#ccc] dark:border-[#606060] rounded-[5px] flex items-center justify-between absolute left-0 right-0 m-auto ">
          <input className=' w-[94%] outline-none bg-transparent' type="text" placeholder='Search'/>
          <SearchIcon/>
        </div>
       {currentUser ? (
        <>
        <button onClick={handleLogOut} className="flex items-center gap-[5px] py-[5px] px-[10px] mr-10  bg-transparent border-blue-600 border-[1px] hover:border-blue-700 border-solid text-blue-600 hover:text-blue-700 text-[xs] font-semibold rounded-[3px] '> <AccountCircleIcon fontSize='small'">Logout</button>
        <div className="User flex items-center gap-[10px] font-medium  ">
          <VideoCallOutlinedIcon onClick={()=> setOpen(true)} />
          <img src={currentUser.img} alt='' className="Avatar w-8 h-8 rounded-[50%] bg-[#999] "/>
            {currentUser.name}
        </div>

        </>
       ) : ( 
       <Link to="signin">
        <button className='flex items-center gap-[5px] py-[5px] px-[10px]  bg-transparent border-blue-600 hover:border-blue-700 border-[1px] border-solid text-blue-600 hover:text-blue-700 text-[xs] font-semibold rounded-[3px] '> <AccountCircleIcon fontSize='small' /> SIGN IN </button>
        </Link>
        )}
      </div>
    </div>
    {open && <Upload setOpen={setOpen} />}
    </>
  )
}

export default Navbar
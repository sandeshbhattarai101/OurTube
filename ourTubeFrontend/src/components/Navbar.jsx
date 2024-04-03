import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Upload from './Upload';
import DropDownProfile from './DropDownProfile';
import axios from 'axios';


function Navbar() {

  const navigate = useNavigate()

 const dispatch = useDispatch();

 const [openProfile, setOpenProfile] = useState(false);
 const [open, setOpen] = useState(false)
 const [q, setQ] = useState("")

  const {currentUser} = useSelector((state) => state.user)
 
  console.log(currentUser);
  const handleLogOut = async()=>{
    dispatch(logout());
    navigate("/signin")
  }

  return (
    < >
    <div className="Container sticky top-0 bg-[#ffffff] dark:bg-[#202020] h-[56px] ">
      <div className="Wrapper flex justify-end items-center relative h-full py-0 px-[20px] ">
        <div className="Search w-[50%] p-[5px] border-[2px] border-solid border-[#ccc] dark:border-[#606060] rounded-[5px] flex items-center justify-between absolute left-24 lg:left-14 xl:left-0 xl:right-0 m-auto cursor-pointer ">
          <input className=' w-[94%] outline-none bg-transparent' type="text" placeholder='Search' onChange={(e)=>setQ(e.target.value)}/>
          <SearchIcon onClick={()=>navigate(`/search?q=${q}`)}/>
        </div>
       {currentUser ? (
        <>
        <button onClick={handleLogOut} className="flex items-center gap-[5px] py-[5px] px-[10px] mr-10  bg-transparent border-blue-600 border-[1px] hover:border-blue-700 border-solid text-blue-600 hover:text-blue-700 text-[xs] font-semibold rounded-[3px] '> <AccountCircleIcon fontSize='small'">Logout</button>
          <VideoCallOutlinedIcon onClick={()=> setOpen(true)} />
        <div  onClick={() => {setOpenProfile((prev) => !prev)}} className="User flex items-center gap-[10px] ml-5 font-medium  ">
          <img src={currentUser?.img} alt=''  className="Avatar w-8 h-8 rounded-[50%] bg-[#999] "/>
            {currentUser?.name}
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
    {openProfile && <DropDownProfile userId={currentUser._id}/>}
    </>
  )
}

export default Navbar
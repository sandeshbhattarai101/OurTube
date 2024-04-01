import React,{Component} from 'react'
import { Link } from 'react-router-dom'


const DropDownProfile = ({userId}) => {

  return (
    <div className='flex flex-col dropDownProfile bg-[#e2e2e2] dark:bg-[#999999] hover:bg-[#dddddd] dark:hover:bg-[#a5a5a5] h-[40px] w-[150px] p-2 absolute right-1'>
        <ul className='flex flex-col gap-4'>
            <li className='text-black dark:text-[#212121] text-center font-semibold'><Link to={`/profile/${userId}`}>Edit Profile </Link> </li>
        </ul>
    </div>


  )
}

export default DropDownProfile
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { loginSuccess } from '../redux/userSlice';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  const params = useParams();
  const oname = currentUser.name || currentUser.others.name  
  const oemail = currentUser.email || currentUser.others.email  
  const [name, setName] = useState(oname);
  const [email, setEmail] = useState(oemail)
  const [img, setImg] = useState('')
  const dispatch = useDispatch()


  const handleUpdate = async(e)=>{
    try {
      const res = await axios.put(`http://localhost:3000/api/users/${params.id}`, {name, email, img},{
        withCredentials: true,
      })
      console.log(res);
     if (res.status == 200){
      dispatch(loginSuccess(res.data))
      setName('');
      setEmail('');
      setImg('')
       alert("User updated successfully")
      }
    } catch (err) {}
  }

  return (
    <>
    <div className="Container flex flex-col items-center justify-center h-[calc(100vh-56px)] text-black dark:text-white ">
        <div className="Wrapper flex flex-col items-center bg-white dark:bg-[#242424] border-[#e5e5e5] dark:border-[#313131] border-[2px] border-solid py-[20px] px-[50px] gap-[10px] ">
            <div className="Title text-[24px]">Edit Profile</div>
            <input className=' border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="text" placeholder='username' value={name} onChange={e=>setName(e.target.value)} />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="email" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
            <div>
            <label htmlFor="image" className='font-semibold'>Image: </label>
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="file" accept="image/*" value={img} onChange={e=>setImg(e.target.value)} />
            </div>
            <button onClick={handleUpdate} className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf] '>Update Profile</button>
        </div>     
        </div>
    </>
  )
}

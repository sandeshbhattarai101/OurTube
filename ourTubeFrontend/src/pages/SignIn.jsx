import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import {auth, provider} from "../firebase.js"
import { signInWithPopup } from 'firebase/auth'

export default function SignIn() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSignUp = async(e)=>{
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", {name, email, password},{
        withCredentials: true,
      })
     if (res.status == 200){
       alert(res.data.message)
       navigate("/signin")
      }
    } catch (err) {}
  }
  const handleLogin = async(e)=>{
    e.preventDefault();
    dispatch(loginStart())
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", {name, password},{
        withCredentials: true,
      })
      localStorage.setItem("token", res.data.token) // setting token to local to storage
      dispatch(loginSuccess(res.data))
    } catch (err) {
      dispatch(loginFailure());
    }
  }

  //for google signin

  const signInWithGoogle = async ()=>{
    dispatch(loginStart());
    signInWithPopup(auth, provider)
    .then((result)=>{
      axios.post("http://localhost:3000/api/auth/google",{
        name: result.user.displayName,
        email: result.user.email,
        img: result.user.photoURL,
      },{
        withCredentials: true,
      }).then((res)=>{
  //       localStorage.setItem("token", res.data.token) // setting token to local to storage
        dispatch(loginSuccess(res.data))
      })
    })
    .catch((error)=>{
     dispatch(loginFailure());
    })
  }

  return (
    <>
    <div className="Container flex flex-col items-center justify-center h-[calc(100vh-56px)] text-black dark:text-white ">
        <div className="Wrapper flex flex-col items-center bg-white dark:bg-[#242424] border-[#e5e5e5] dark:border-[#313131] border-[2px] border-solid py-[20px] px-[50px] gap-[10px] ">
            <div className="Title text-[24px]">Sign in</div>
            <div className="SubTitle text-[20px] font-light ">to continue to OurTube</div>
            <input className=' border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="text" placeholder='username'  onChange={e=>setName(e.target.value)} />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="password" placeholder='password' onChange={e=>setPassword(e.target.value)} />
            <button onClick={handleLogin} className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf] '>Sign in</button>
            <div className="Title text-[24px]">or</div>
            <button onClick={signInWithGoogle} className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf]  '>Signin with Google</button>
            <div className="Title text-[24px]">or</div>
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="text" placeholder='username'   onChange={e=>setName(e.target.value)} />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="email" placeholder='email'  onChange={e=>setEmail(e.target.value)} />
            <input className='border-solid outline-none border-[2px] border-[#dedede] dark:border-[#4e4e4e]  rounded-[3px] bg-transparent' type="password" placeholder='password'  onChange={e=>setPassword(e.target.value)} />
            <button onClick={handleSignUp}  className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf]  '>Sign up</button>
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

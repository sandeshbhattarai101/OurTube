import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js';


export default function Comment({comment}) {
  const [channel, setChannel] = useState({})
  
  useEffect(() => {
    const fetchComment = async() =>{
      
      const res = await axios.get(`https://our-tube-api.vercel.app/api/users/find/${comment.userId}`,{
        withCredentials: true,
      })
      
      setChannel(res.data)
      
    }
    fetchComment();
  }, [comment.userId])
  
  return (
    <>
    <div className="Container flex  gap-[10px] my-[30px] mx-0 ">
    <img src={channel?.img} alt="" className="Avatar h-[40px] w-[40px] rounded-[50%]" />
    <div className="Details flex flex-col gap-10 ">
        <span className="Name text-[13px] font-medium ">{channel?.name}
        <span className="Date text-[12px] ml-[5px] font-normal  text-[#545454] dark:text-[#9e9e9e] ">{format(comment.createdAt)}</span>
        </span>
        <span className="Text  text-[14px] ">
          {comment?.desc}
        </span>
    </div>
    </div>
    </>
  )
}

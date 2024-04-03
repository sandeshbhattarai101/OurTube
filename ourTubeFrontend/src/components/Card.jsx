import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default function Card({ type, video }) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async()=>{
      const res = await axios.get(`https://our-tube-api.vercel.app/api/users/find/${video.userId}`,{
        withCredentials: true,
      })
      setChannel(res.data)
    }
    fetchChannel()
  }, [video.userId])
  
  return (
    <Link to={`/video/${video._id}`}>
      <div
        className={`Container ${type !== "sm" && "w-[360px]"} ${type === "sm" ? "flex mb-[10px]" : "mb-[45px]"} cursor-pointer gap-[10px]`}
      >
        <img
          className={`w-full ${type === "sm" ? "h-[120px]" : "h-[202px]"} bg-gray-500 flex-[1] `}
          src={video.imgUrl}
          alt="thumbnail"
        />
        <div className={`Details ${type !== "sm" && "mt-[16px]"} flex flex:[1] gap-3`}>
          <img
            className={`ChannelImage ${type === "sm" && "hidden"} w-9 h-9 rounded-[50%] bg-gray-500`}
            src={channel?.img}
            alt="ChannelLogo"
          />
          <div className="Texts">
            <h1 className="Title text-4 font-medium text-black dark:text-white">{video.title}</h1>
            <h2 className="ChannelName text-[14px] font-medium text-[#373737] dark:text-white my-[9px] mx-0">{channel?.name}</h2>
            <div className="Info text-[14px] text-[#373737] dark:text-white">{video.views} views {format(video.createdAt)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}


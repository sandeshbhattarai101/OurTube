import React, { useEffect, useState } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Comments from '../components/Comments';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchSuccess, like } from '../redux/videoSlice';
import { format } from 'timeago.js';
import { subscription } from '../redux/userSlice';
import Recommendation from '../components/Recommendation';


function Video() {
  const tokenLocal = localStorage.getItem("token") //geting token from localStorage
  const {currentUser}  = useSelector((state) => state.user); 
  const {currentVideo} = useSelector((state) => state.video)
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2] //taking second item i.e videoId
  const [channel, setChannel] = useState({})
  

  useEffect(() => {
    const fetchData = async() =>{
     try {
      const videoRes = await axios.get(`http://localhost:3000/api/videos/find/${path}`,{
        withCredentials: true,
      })
      const channelRes = await axios.get(`http://localhost:3000/api/users/find/${videoRes.data.userId}`,{
        withCredentials: true,
      })
      setChannel(channelRes.data)
      dispatch(fetchSuccess(videoRes.data))

     } catch (err) {}
    }
    fetchData();
  }, [path, dispatch])

  //Axios Post request assumes that the second parameter is data and third parameter is config.

//Axios Get request assumes that the second parameter is config while the data is appended in URL.

// I was sending data in the url which should be as second parameter(For POST request).
  
  const handleLike = async()=>{
   await axios.put(`http://localhost:3000/api/users/like/${currentVideo._id}`,{},{
    withCredentials: true,
   })
   dispatch(like(currentUser._id))
  }

  const handleDislike = async()=>{
   await axios.put(`http://localhost:3000/api/users/dislike/${currentVideo._id}`,{}, {
      withCredentials: true,
    })
    dispatch(dislike(currentUser._id))
  }

  const handleSub = async()=>{
    currentUser?.subscribedUsers?.includes(channel?._id) ?
  await axios.put(`http://localhost:3000/api/users/unsub/${channel._id}`,{},{
      withCredentials:true,
    }) :
    await axios.put(`http://localhost:3000/api/users/sub/${channel._id}`,{},{
      withCredentials:true,
    })
    dispatch(subscription(channel._id))
  }
  return (
    <>
    { currentVideo && <div className="Container flex gap-[24px] ">
      <div className="Content flex-[5] ">
        <div className="VideoWrapper">
       <video className='VideoFrame max-h-[720px] w-full object-cover ' src={currentVideo.VideoUrl} controls/> 
        </div>
        <div className="Title text-[18px] font-medium mt-5 mb-[10px] text-black dark:text-white ">{currentVideo.title}</div>
        <div className="Details flex items-center justify-between mb-5 ">
        <div className="Channel flex items-center justify-between">
          <div className="ChannelInfo flex gap-[10px] ">
            <img src={channel?.img} alt="" className="logo h-[40px] w-[40px] rounded-[50%]" />
            <div className="ChannelDetail flex flex-col text-[#545454] dark:text-[#9e9e9e] ">
            <span className="ChannelName font-medium">{channel?.name}</span>
            <span className="ChannelCounter font-normal text-sm w-32  ">{channel?.subscribers} subscribers</span>
            </div>
            <button onClick={handleSub} className="Subscribe text-[#e8e8e8] dark:text-[#3e3e3e] font-semibold bg-black dark:bg-white h-9 w-[110px] rounded-2xl">
              {currentUser?.subscribedUsers?.includes(channel._id) 
              ? "Subscribed"
              : "Subscribe"}
            </button>
        </div>
          </div>
          <div onClick={handleLike} className='Buttons flex gap-[14px] text-[14px] text-[#545454] dark:text-[#9e9e9e]'>
            <button >{currentVideo.likes?.includes(currentUser?._id) ? (
            <ThumbUpIcon/>
            ) : (
            <ThumbUpOutlinedIcon/>
            )}{" "}
            {currentVideo.likes?.length}</button>

            <button onClick={handleDislike} className=' ' >{currentVideo.dislikes?.includes(currentUser?._id) ?( 
             <ThumbDownIcon/>
             ) : (
              <ThumbDownOutlinedIcon/>
              )}{" "}
              {currentVideo.dislikes?.length}</button>
            <button  ><ReplyOutlinedIcon/>Share</button>
            <button  ><PlaylistAddOutlinedIcon/>Save</button>
          </div>
        </div>
        <div className="ChanelViewDetail">
          <div className="Info text-[14px] font-medium text-black dark:text-[#9e9e9e]">{currentVideo.views} views <span className='ml-2'> {format(currentVideo.createdAt)}</span> </div>
          <div className="Description text-[14px] ">
            {currentVideo.desc}
          </div>
        </div>
        <div className='Hr  my-[15px] mx-0 border-[0.5px] border-solid border-[#eeeeee] dark:border-[#373737]  '></div>
        <Comments videoId={currentVideo._id} />
      </div>
    <Recommendation tags={currentVideo.tags}/>
    </div>}
    </>
  )
}

export default Video
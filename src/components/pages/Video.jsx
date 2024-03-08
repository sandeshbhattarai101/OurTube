import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Comments from '../Comments';
import Card from '../Card';
function Video() {
  return (
    <>
    <div className="Container flex gap-[24px] ">
      <div className="Content flex-[5] ">
        <div className="VideoWrapper">
        <iframe 
        width="100%" 
        height="720" 
        src="https://www.youtube.com/embed/psuRGfAaju4?si=gLGTqfF_4yJukjbs" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
        <div className="Title text-[18px] font-medium mt-5 mb-[10px] text-black dark:text-white ">Owl City - Fireflies</div>
        <div className="Details flex items-center justify-between mb-5 ">
        <div className="Channel flex items-center justify-between">
          <div className="ChannelInfo flex gap-[10px] ">
            <img src="../../public/images/Avatar.png" alt="" className="logo h-[40px] w-[40px] rounded-[50%]" />
            <div className="ChannelDetail flex flex-col text-[#545454] dark:text-[#9e9e9e] ">
            <span className="ChannelName font-medium">Owl City</span>
            <span className="ChannelCounter font-normal text-sm w-32  ">3.45M subscribers</span>
            </div>
            <button className="Subscribe text-[#e8e8e8] dark:text-[#3e3e3e] font-semibold bg-black dark:bg-white h-9 w-[90px] rounded-2xl">
              Subscribe
            </button>
        </div>
          </div>
          <div className='Buttons flex gap-[14px] text-[14px] text-[#545454] dark:text-[#9e9e9e]'>
            <button className=' '><ThumbUpOutlinedIcon/>Like</button>
            <button className=' ' ><ThumbDownOutlinedIcon/>Dislike</button>
            <button className=' ' ><ReplyOutlinedIcon/>Share</button>
            <button className=' ' ><PlaylistAddOutlinedIcon/>Save</button>
          </div>
        </div>
        <div className="ChanelViewDetail">
          <div className="Info text-[14px] font-medium text-black dark:text-[#9e9e9e]">522M views <span className='ml-2'> 14 years ago </span> </div>
          <div className="Description text-[14px] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptatibus numquam eveniet ipsa consectetur delectus deserunt et. Culpa tempora enim quasi dolores aliquid doloremque modi, harum unde quos ratione. Optio!
          </div>
        </div>
        <div className='Hr  my-[15px] mx-0 border-[0.5px] border-solid border-[#eeeeee] dark:border-[#373737]  '></div>
        <Comments/>
      </div>
      <div className="Recommendation flex-[2] ">
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
         
      </div>
    </div>
    </>
  )
}

export default Video
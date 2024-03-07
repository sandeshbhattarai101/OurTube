import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


function Menu() {

  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("Dark Mode");

  useEffect(()=>{
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch = ()=>{
    setTheme(theme === "dark" ? "light" : "dark");
    setMode(mode === "Dark Mode" ? "Light Mode" : "Dark Mode")
  }


  return (
    <div className='Container sticky top-0 flex-[1] bg-white dark:bg-[#202020] text-[black] dark:text-white h-[100vh] text-[14px] '>
    <div className='Wrapper py-[18px] px-[26px]'>
    <Link to='/video/test' >
        <div className="logo flex items-center gap-[5px] font-bold mb-[25px]">
            <img className='h-[25px] aspect-square object-contain   ' src="../../public/images/youtubelogo.png" alt="" />
            OurTube
        </div>
    </Link>
        <div className="Item">
          <HomeIcon/>
         Home 
        </div>

        <div className="Item">
          <ExploreIcon/>
         Explore 
        </div>

        <div className="Item">
          <SubscriptionsIcon/>
         Subscription 
        </div>

        <div className='Hr  my-[15px] mx-0 border-[0.5px] border-solid border-[#eeeeee] dark:border-[#373737]  '></div>

        <div className="Item">
          <LibraryAddIcon/>
         Library 
        </div>

        <div className="Item">
          <HistoryIcon/>
         History 
        </div>

        <div className='Hr  my-[15px] mx-0 border-[0.5px] border-solid border-[#eeeeee] dark:border-[#373737]  '></div>

        <div className="Login ">
          Sign in to like videos, comment, and subscribe.
          <button className='flex items-center gap-[5px] py-[5px] px-[10px] mt-[10px] bg-transparent border-blue-600 border-[1px] border-solid text-blue-600 text-[xs] font-semibold rounded-[3px] '> <AccountCircleIcon fontSize='small' /> SIGN IN </button>
        </div>

        <div className='Hr  my-[15px] mx-0 border-[0.5px] border-solid border-[#eeeeee] dark:border-[#373737]  '></div>

        <div className="Title text-md font-semibold text-[#aaaaaa] mb-[10px] ">BEST OF OURTUBE</div>

        <div className="Item">
          <LibraryMusicIcon/>
         Music 
        </div>

        <div className="Item">
          <SportsBasketballIcon/>
         Sports 
        </div>

        <div className="Item">
          <SportsEsportsIcon/>
         Gaming 
        </div>

        <div className="Item">
          <MovieCreationIcon/>
         Movies 
        </div>

        <div className="Item">
          <ArticleIcon/>
         News 
        </div>

        <div className="Item">
          <LiveTvIcon/>
         Live 
        </div>

        <div className='Hr  my-[15px] mx-0 border-[0.5px] border-solid border-[#eeeeee] dark:border-[#373737]  '></div>

        <div className="Item">
          <SettingsIcon/>
         Settings 
        </div>

        <div className="Item">
          <FlagIcon/>
         Report 
        </div>

        <div className="Item">
          <HelpIcon/>
         Help 
        </div>

        <div onClick={handleThemeSwitch} className="Item">
          <LightModeIcon/>
         {mode}
        </div>
      </div>
    </div>
  )
}

export default Menu
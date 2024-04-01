
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card';

export default function Search() {
    const query = useLocation().search
    console.log(query);
    const [videos, setVideos] = useState([])
    useEffect(() => {
      const fetchVideos = async()=>{
        const res = await axios.get(`http://localhost:3000/api/videos/search${query}`)
        setVideos(res.data)
    }
    console.log(videos)
      fetchVideos()
    }, [query])
    
  return (
    <>
    <div className="Container flex flex-wrap gap-[10px]">
        {videos && videos.map((video)=>(
            <Card key={video._id} video={video}/>
        ))}
    </div>
    </>
  )
}

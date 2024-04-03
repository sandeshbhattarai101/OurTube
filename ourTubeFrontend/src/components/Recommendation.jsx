import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Recommendation({tags}) {
    const [videos, setVideos] = useState([])

    useEffect(() => {
      const fetchVideos = async ()=>{
        const res = await axios.get(`https://our-tube-api.vercel.app/api/videos/tags?tags=${tags}`,{
          withCredentials: true,
        })
        setVideos(res.data);
      }
      fetchVideos()
    }, [tags])
    
  return (
    <>
    {videos && <div className="Container">
        {videos.map((video)=>(
            <Card type="sm" key={video._id} video={video}/>
        ))}
    </div>}
    </>
  )
}

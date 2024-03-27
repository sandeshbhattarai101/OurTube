import React, {useState, useEffect} from 'react'
import Card from '../components/Card.jsx'
import axios from "axios"


export default function Home({type}) {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async()=>{
      const res = await axios.get(`http://localhost:3000/api/videos/${type}`,{
        withCredentials: true,
      })
      setVideos(res.data)
    }
    fetchVideos()
  }, [type])
  

  return (
    <>
    <div className="Container  flex justify-between flex-wrap ">
       {videos.map((video) => (
         <Card key={video._id} video={video} />
       ))}
    </div>
    </>
  )
}

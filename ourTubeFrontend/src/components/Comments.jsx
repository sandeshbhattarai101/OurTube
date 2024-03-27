import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import {useSelector} from 'react-redux';

export default function Comments({videoId}) {

  const {currentUser}  = useSelector((state)=> state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async() =>{
     try {
      const res = await axios.get(`http://localhost:3000/api/comments/${videoId}`,{
        withCredentials: true,
      })
      setComments(res.data)

     } catch (err) {}
    }
    fetchComments();
  }, [videoId])

  return (
    <>
    <div className="Container">
        <div className="NewComment flex items-center gap-[10px] ">
        <img src={currentUser.img} alt="" className="Avatar h-[40px] w-[40px] rounded-[50%]" />
            <input className=' border-none  bg-transparent outline-none p-[5px] w-full ' type="text" placeholder='Add a comment...' />
        </div>
        {comments.map((comment)=>{
          <Comment key={comment._id} comment={comment} />
        })}
    </div>
    </>
  )
}

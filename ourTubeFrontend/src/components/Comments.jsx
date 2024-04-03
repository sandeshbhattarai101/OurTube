import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import {useSelector} from 'react-redux';
import axios from 'axios';

export default function Comments({videoId}) {
  
  const {currentUser}  = useSelector((state)=> state.user);

  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState('');
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
  }, [videoId, desc])
  
  
    const handleComment = async(e)=>{
      e.preventDefault()
      try {
        // we have to use same name as model while sending data from form/input
        await axios.post(`http://localhost:3000/api/comments/comment/${videoId}`,{desc},{
          withCredentials: true,
        })
        setDesc('');
       } catch (err) {}
    }

  return (
    <>
    <div className="Container">
        <div className="NewComment flex items-center gap-[10px] ">
        <img src={currentUser?.img} alt="" className="Avatar h-[40px] w-[40px] rounded-[50%]" />
            <input className=' border-none  bg-transparent outline-none p-[5px] w-full ' type="text" placeholder='Add a comment...' name='desc' value={desc} onChange={e=>setDesc(e.target.value)}/>
            <button onClick={handleComment}  className='rounded-[20px] border-none px-[20px] py-[10px]  bg-[#e5e5e5] hover:bg-[#d1d1d1] dark:bg-[#313131] hover:dark:bg-[#414141] text-[#6e6e6e] dark:text-[#bfbfbf]  '>Comment</button>
        </div>
        {comments?.map((comment)=>(
          <Comment key={comment._id} comment={comment} />
          ))}
        {/* map function use garda arrow function paxi map(()=>(<div>)) paranthesis hunxa 
        natra  curly paranthesis use garne ho vane return use garnu parx
        map(() => { return <div>}*/}
    </div>
    </>
  )
}

import React from 'react'
import Comment from './Comment'

export default function Comments() {
  return (
    <>
    <div className="Container">
        <div className="NewComment flex items-center gap-[10px] ">
        <img src="../../public/images/Avatar.png" alt="" className="Avatar h-[40px] w-[40px] rounded-[50%]" />
            <input className=' border-none  bg-transparent outline-none p-[5px] w-full ' type="text" placeholder='Add a comment...' />
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
    </>
  )
}

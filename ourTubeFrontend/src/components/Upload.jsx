import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import axios from 'axios';


export default function Upload({setOpen}) {
  
  //  const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const [img, setImg] = useState(undefined)
    const [video, setVideo] = useState(undefined)
    const [imgPerc, setImgPerc] = useState(0)
    const [videoPerc, setVideoPerc] = useState(0)
    const [inputs, setInputs] = useState({})
    const [tags, setTags] = useState([])

    const handleChange=(e)=>{
        setInputs((prev)=>{
            return{...prev, [e.target.name]: e.target.value}
        })
    }


    const handleText=(e)=>{
        setTags(e.target.value.split(","));
    };

    const uploadFile =(file, urlType)=>{
        //From Firebase Storage
        const storage = getStorage(app); //have to pass app from firebase.js
        const fileName = new Date().getTime() + file.name //to make each uploaded file unique
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
        break;
    }
  }, 
  (error) => {},
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setInputs((prev)=>{
            return{...prev, [urlType]: downloadURL}
        })    });
  }
   )};

    useEffect(() => {
     video && uploadFile(video, "VideoUrl"); //if video then call this func, both has to be true
    }, [video]);


    useEffect(() => {
      img && uploadFile(img, "imgUrl");
    }, [img]);
    

    const handleUpload = async(e)=>{
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/api/videos", {...inputs, tags},{
          withCredentials:true,
          // headers: {
          //   'Authorization': `Bearer ${token}`,
          //   'Content-Type': 'application/json' // Adjust content type as needed
          // }
        })
        console.log(res);
        setOpen(false);
        res.status === 200 && navigate(`/video/${res.data._id}`)
    }

  return (
   <div className="Container w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[#000000a7]">
    <div className="Wrapper w-[600px] h-[600px] bg-[#d1d1d1] dark:bg-[#343434] p-[20px] flex flex-col gap-[20px] relative ">
        <div onClick={()=> setOpen(false)} className="Close absolute top-[10px] right-[20px] cursor-pointer text-2xl font-semibold ">
            X
        </div>
        <h1 className="Title text-center text-3xl font-semibold ">
            Upload a New Video
        </h1>
        <label htmlFor="video" className='text-[16px] font-semibold '>Video:</label>
        { videoPerc > 0 ? ("Uploading:" + videoPerc + "%") : (<input className='border-solid outline-none border-[2px] border-[#c0c0c0] dark:border-[#4e4e4e] rounded-[3px] bg-transparent' type="file" accept="video/*" onChange={e=>setVideo(e.target.files[0])} />)}
        <input className='border-solid outline-none border-[2px] border-[#c0c0c0] dark:border-[#4e4e4e] rounded-[3px] bg-transparent' type="text" placeholder="Title" name='title' onChange={handleChange} />
        <textarea className='border-solid outline-none border-[2px] border-[#c0c0c0] dark:border-[#4e4e4e] rounded-[3px] bg-transparent' type="text" placeholder="Description" rows={8} name="desc" onChange={handleChange} />
        <input className='border-solid outline-none border-[2px] border-[#c0c0c0] dark:border-[#4e4e4e] rounded-[3px] bg-transparent' type="text" placeholder="Seperate the tags with commas." onChange={handleText} />
        <label htmlFor="image" className='text-[16px] font-semibold' >Image:</label>
        {imgPerc > 0 ? ("Uploading:" + imgPerc + "%") :(<input className='border-solid outline-none border-[2px] border-[#c0c0c0] dark:border-[#4e4e4e] rounded-[3px] bg-transparent' type="file" accept="image/*" onChange={e=>setImg(e.target.files[0])} />)}
        <button onClick={handleUpload} className='rounded-[3px] border-none px-[20px] py-[10px]  bg-[#c1c1c1] hover:bg-[#b6b6b6] dark:bg-[#313131] hover:dark:bg-[#414141] font-semibold '>Upload</button>
    </div>
   </div>
  )
}

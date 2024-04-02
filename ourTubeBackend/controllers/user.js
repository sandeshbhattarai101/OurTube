import { createError } from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js"
import fs from "fs"

export const updateUser = async (req, res, next)=>{
// IF THERE IS OLD IMAGE
const {id} = req.params
const oldData = await User.findById(id)
const oldImage = oldData.img
if(oldImage){
const lengthToCut =  process.env.BACKEND_URL.lengthconst
const finalFilePathAfterCut = oldImage.slice(lengthToCut)

if(req.file && req.file.filename){
    //REMOVE FILE FROM UPLOADS FOLDER
    fs.unlink("./uploads/" + finalFilePathAfterCut,(err)=>{
        if(err){
            console.log("error deleting file",err)

        }else{
            console.log("file deleted successfully")
        }
    })
}
}
 const file = req.file
 let filePath;
 if(file){
            filePath = req.file.filename
        }
        
if(req.params.id === req.user.id){
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {...req.body, img: process.env.BACKEND_URL + filePath }
        },{
            new:true 
        })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err);         
    }
}else{
    return next(createError(403, "You can update only your account!"))
}
}

export const deleteUser = async (req, res,next)=>{
    if(req.params.id === req.user.id){
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted.")
        } catch (err) {
            next(err);         
        }
    }else{
        return next(createError(403, "You can delete only your account!"))
    }
}

export const getUser = async (req, res,next)=>{
 
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (err) {
            next(err);         
        }
    
}

export const subscribe = async (req, res,next)=>{
    if(req.params.id !== req.user.id){
        try {
             await User.findByIdAndUpdate(req.user.id,{
                $push:{subscribedUsers: req.params.id}
             })
             await User.findByIdAndUpdate(req.params.id,{
                $inc:{ subscribers: 1},
             })
             res.status(200).json({
                message: "Subscription Successfull"
             })
        } catch (err) {
            next(err);         
        }
    }else{
        res.status(404).json({
            message: "Cannot subscribe own Channel"
        })
    }
    }


export const unsubscribe = async (req, res,next)=>{
   
        try {
             await User.findByIdAndUpdate(req.user.id,{
                $pull:{subscribedUsers:req.params.id}
             })
             await User.findByIdAndUpdate(req.params.id,{
                $inc:{ subscribers: -1},
             })
             res.status(200).json({
                message: "Unsubscription Successfull"
             })
        } catch (err) {
            next(err);         
        }
    }


export const like = async (req, res,next)=>{
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{likes:id},  // ensures that the content is added only once no duplicates unlike $push
            $pull:{dislikes:id}                            
        })
        res.status(200).json("The video has been liked.")
    } catch (err) {
        next(err)
    }
}

export const dislike = async (req, res,next)=>{
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{dislikes:id},  // add id to dislike array but with no duplicates
            $pull:{likes:id}      // removes id from likes array if video id liked previously                    
        })
        res.status(200).json("The video has been disliked.")
    } catch (err) {
        next(err)
    }
}

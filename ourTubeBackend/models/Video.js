import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true,
    },
    desc:{
        type: String,
        required:true,
    },
    imgUrl:{
        type: String,
        required:true,
    },
    VideoUrl:{
        type: String,
        required:true,
    },
    views:{
        type: String,
        default:0,
    },
    tags:{
        type: [String],
        required:true,
    },
    likes:{
        type: [String],
        required:true,
    },
    dislikes:{
        type: [String],
        required:true,
    },    
    },
    {
        timestamps:true
    }
    );

    export default mongoose.model("Video", VideoSchema)
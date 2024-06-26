import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
   // const tokenLocal = req.headers.authorization; //if local storage is used and token is sent through headers
    if(!token) return next(createError(404, "You are not authenticated!"))

    jwt.verify(token, process.env.JWT, (err,user)=>{
        if(err) return next(createError(403,"Token is not valid!"))
        req.user = user;
    next()
    })
}
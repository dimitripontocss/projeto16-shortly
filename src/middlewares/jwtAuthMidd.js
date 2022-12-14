import jwt from "jsonwebtoken";

import handleError from "../utils/handleError.js";

export async function jwtAuth(req,res,next){
    try{
        const key = process.env.SENHA_JWT;
        const { authorization } = req.headers;
		const token = authorization?.replace("Bearer ", "");
        const data = jwt.verify(token, key);
        res.locals.data = data;
        next();
    }catch(error){
		return handleError({status:401, msg:error.message, res})
    }
}
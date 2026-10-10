import { AppError } from "../error/error";


export function guard(req,res,next) {
    try{
        const token=req.cookies.access_token;
        if(!token) throw new AppError('NO TOKEN provider',403);
        req.user=jwt.verify(token,env.jwt.secret);
        next();
    }catch(error){
        next(error);
    }
}   
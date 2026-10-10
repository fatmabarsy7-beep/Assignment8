
//midlewire to cache

import { cacheProvider } from "./init";

export  function withCache(ttl=3600) {
    return async (req,res,next)=>{
       // requset
       //method+url
       let key ='${req.method}: ${req.originUrl}';

    const cached=  await cacheProvider.get(key);
    if(cached){
        return req.json(JSON.parse(cached));
    }
    const originUrlJson=res.json.bind(res);
    res.json=(async(body)=>{
        await cacheProvider.set(key,JSON.stringify(body),ttl);

        res.setHeader('X-Cache',"MISS")

        return originUrlJson(body);
    })
        next();
    }
}
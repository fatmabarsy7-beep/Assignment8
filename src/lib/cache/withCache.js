
//midlewire to cache

import { cacheProvider } from "./init";

// export  function withCache(ttl=3600) {
//     return async (req,res,next)=>{
//        // requset
//        //method+url
//        let key ='${req.method}: ${req.originUrl}';

//     const cached=  await cacheProvider.get(key);
//     if(cached){
//         return req.json(JSON.parse(cached));
//     }
//     const originUrlJson=res.json.bind(res);
//     res.json=(async(body)=>{
//         await cacheProvider.set(key,JSON.stringify(body),ttl);

//         res.setHeader('X-Cache',"MISS")

//         return originUrlJson(body);
//     })
//         next();
//     }
// }




export function withCache(ttl = 3600) {
  return async (req, res, next) => {
    const key = `${req.method}:${req.originalUrl}`;

    try {
      const cached = await cacheProvider.get(key);

      if (cached) {
        res.setHeader("X-Cache", "HIT");
        return res.json(JSON.parse(cached));
      }

      res.setHeader("X-Cache", "MISS");

      const originalJson = res.json.bind(res);

      res.json = function (body) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          Promise.resolve(
            cacheProvider.set(key, JSON.stringify(body), ttl)
          ).catch((err) => {
            console.error("Cache set error:", err);
          });
        }

        return originalJson(body);
      };

      next();
    } catch (error) {
      console.error("Cache error:", error);
      next(error);
    }
  };
}
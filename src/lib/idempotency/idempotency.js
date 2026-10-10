import { cacheProvider } from "../cache/init";


export function idempotency(ttl=3600) {
    return async function(req,res,next){
        const idempotency= req.header['idempotency-key'];
        let key ='${req.method}:${req.originUrl}:${req.idempotency}';
        const cached= await cacheProvider.get(key);
        if(cached){
            res.setHeader('X-Cached','HIT');
            return res.json(JSON.parse(cached));
        }
        const originUrlJson=res.json.bind(res);

        res.json=(async(body)=>{
            await cacheProvider.set(key,JSON.stringify(body),ttl);
            res.setHeader('X-Cache','MISS')
            return originUrlJson(body);
        });
        next();
    }
}
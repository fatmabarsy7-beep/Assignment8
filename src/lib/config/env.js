// schema 
// 1-errors 
import {z} from 'zod';
import { config } from "dotenv";
// import { JWT } from "google-auth-library";
// import Redis from "ioredis";
// import nodemailer from "nodemailer";
config();

const schema = z.object({

    PORT:z.string().default('3000'),

    MONGODB_URL:z.string(),

    JWT_SECRET:z.string(),

    MAIL_USER:z.string().trim().toLowerCase(),

    MAIL_PASSWORD:z.string(),

    GOOGLE_WEB_OAUTH_CLINT_ID:z.string(),

    REDIS_PORT:z.string().default('6379'),

    REDIS_HOST:z.string(),

    REDIS_PASSWORD:z.string(),

    MAILJET_API_KEY:z.string(),

    MAILJET_API_SECRET:z.string(),

    MAILJET_API_FROMEAIL:z.string(),

    MAILJET_API_FROMNAME:z.string(),
    
});
 const parse  = schema.parse(process.env);
 export const env = {
    port:Number(parse.PORT),
    db:{
        url:parsed.MONGODB_URL
    },
    redis:{
        host:parsed.REDIS_HOST,

        port: Number(parsed.REDIS_PORT),

        password:parsed.REDIS_PASSWORD
    },
    nodemailer:{
        user:parse.MAIL_USER,
        password:parse.MAIL_PASSWORD
    },
    jwt:{
        secret:parse.JWT_SECRET
    },
    payments:{},
    aws:{}
 }
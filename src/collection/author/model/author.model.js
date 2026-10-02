import { model, Schema } from "mongoose";

const authorSchema = new Schema(
    {
    name:{
        type:String,
        require:true,
        trime:true
    }  ,
    country:{
        type:String
    }

    },
    {
        timestamps:true
    }
)
export const Author= model('Author' , authorSchema);
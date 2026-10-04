import { model, Schema } from "mongoose";

const authorSchema = new Schema(
    {
    name:{
        type:String,
        require:true,
        trime:true
    }  ,
      email: {
         type: String,
         required: true,
         unique: true
},

    password: {
         type: String,
         required: true
},
    country:{
        type:String
    }

    },
    {
        timestamps:true
    }
)
export const Author= model('Author' , authorSchema);
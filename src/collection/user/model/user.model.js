import { model, Schema } from "mongoose";
const userSchema=new Schema(
  {
name:   {
type:String,
required:true,
minilenght:3,
maxlength:20, 
trim:true
  },
  email : {
        type:String,
        required:true,
        trim:true,
        maxlength:50,
        minilenght:3
  },
  password :{
      type:String,
      required:function(){
      return this.provider ==='local';
   },


  },
  provider: {
     type:String,
     enum:['local','google','facebooke'],
     default:'local'
  },
    isDeleted :{
        type:Boolean,
        default:false
   },
   isVerified:{
          type:Boolean,
        default:false
   },
 dob:Date,
   gender:{
     type:String,
     enum:['male','female'],
     required:true
   },


},
 
{
   timestamps:{
    createdAt:true,
    updateAt:true
   }

}
)


export const User = model('User',userSchema);
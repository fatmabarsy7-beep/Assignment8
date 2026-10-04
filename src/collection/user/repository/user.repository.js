
import {User} from '../model/user.model.js';


 export async function updateUserByEmail(email,updatData){
    return await User.findOneAndUpdate(
        {email:email},//filter
        updatData,//update data
        {returnDocument:'after'}//options
    );
}
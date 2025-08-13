
import { model, models, Schema } from "mongoose";


const MemberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },  
},{
    timestamps: true,
})


export const Member = models.Member || model("Member", MemberSchema); 
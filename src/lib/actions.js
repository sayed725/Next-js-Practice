 
 "use server";

import { Member } from "@/models/Member";
import { connectDB } from "./mongodb";

 export const createMember = async (formData) => {

    await connectDB();

     const name = formData.get('name');
        const email = formData.get('email');

        // console.log("Form Data:", { name, email });

     try {

        // const newMember = await Member.create({ name, email });

        const newMember = await Member({ name, email})
        await newMember.save();

        return {
            success: true,
            message: "Member created successfully",
            member: JSON.parse(JSON.stringify(newMember)),
        };
        

     } catch (error) {
         
        console.error("Error creating member:", error);
        return {
            success: false,
            message: "Error creating member",
            error: error.message,
        };
     }
 }
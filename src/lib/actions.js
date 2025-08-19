 
 "use server";

import { Member } from "@/models/Member";
import { connectDB } from "./mongodb";
import { revalidatePath } from "next/cache";

 export const createMember = async (formData) => {

    await connectDB();


    await new Promise((resolve)=> setTimeout(resolve,1000))

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


export const updateMember = async (id, prevState, formData) => {
  await connectDB();

  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();

  if (!name || !email) {
    return {
      success: false,
      message: "Name and email are required",
    };
  }

 

  try {
    const updatedMember = await Member.findByIdAndUpdate(
      id,
      { name, email },
      { new: true, runValidators: true }
    ).select("name email");

    if (!updatedMember) {
      return {
        success: false,
        message: "Member not found",
      };
    }

    revalidatePath(`/member/${id}`);
    revalidatePath(`/member`);

    return {
      success: true,
      message: "Member updated successfully",
      member: {
        ...updatedMember.toObject(),
        _id: updatedMember._id.toString(), // Ensure _id is a string
      },
    };
  } catch (error) {
    console.error("Error updating member:", error);
    return {
      success: false,
      message: error.name === "ValidationError" ? "Invalid data provided" : "Error updating member",
      error: error.message,
    };
  }
};
"use server"

import Message from "@/models/Message";
import { connectDB } from "./mongodb";
import { revalidatePath } from "next/cache";

export const sendMessage = async (formData) => {


    const text = formData.get('text')?.trim();
    const author = "User"; 

    if (!text) {
        return {
            success: false,
            message: "Message text is required",
        };
    }

    await connectDB();

    await Message.create({text, author});

    return {
        success: true,
        message: "Message sent successfully",
       
    }

    revalidatePath("/chat");

   

}


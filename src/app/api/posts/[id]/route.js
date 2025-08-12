
"use server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";


export async function GET( request,  {params} ) {
    
    await connectDB();

   

    const post = await Post.findById( params.id ).lean();

    if (!post) {
        return new Response("Post not found", { status: 404 });
    }

    return NextResponse.json(post);
}


export async function DELETE( request, {params}) {
    
    await connectDB();

    const { id} = await params;

    const post = await Post.findByIdAndDelete(id);
    
    if (!post) {
        return new Response("Post not found", { status: 404 });
    }
    return NextResponse.json({ message: "Post deleted successfully" });
}


export async function PUT( request, {params}) {

    await connectDB();

    const { id } = await params;

    const body = await request.json();

    console.log("Update body:", body);

    const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true })

    return NextResponse.json({ message: "Post updated successfully", post: updatedPost });
    
}
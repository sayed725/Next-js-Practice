'use server';

import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
   await connectDB();

   const posts =  await Post.find().lean();


   // console.log(posts);

   return NextResponse.json(posts);

}


export async function POST(request) {
   await connectDB();
   const body = await request.json();

   const newPost = await Post.create(body)
   return NextResponse.json( {message: "post created successfully", post: newPost }); 
}
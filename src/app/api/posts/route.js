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
import ChatClient from '@/components/ChatClient';
import { connectDB } from '@/lib/mongodb';
import Message from '@/models/Message';
import React from 'react'




const getMessages = async () => {

    await connectDB();

    const data = await Message.find({}).sort({ createdAt: -1 }).lean();

    return JSON.parse(JSON.stringify(data))

    
 
  }

const ChatPage = async() => {

  const messages = await getMessages();

//   console.log(messages);

  return (
    <div className='text-center mt-10 min-h-screen'>

        <h1 className='text-center mt-10 text-2xl font-bold'>Chat Page</h1>

        <ChatClient initialMessages={messages} />


    </div>
  )
}

export default ChatPage

"use client"
import React, { startTransition, useOptimistic, useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { sendMessage } from '@/lib/message'



const ChatClient = ({ initialMessages }) => {

    const formRef = useRef(null);


      const [optimisticMessages, addOptimisticMessage] = useOptimistic(initialMessages, ( state, newMessage) => [
        
        {
             text: newMessage.text,
             author: 'User',
             sending: true,
        },
        ...state


        ]);


        const formAction = async (formData) => {

            const message = formData.get('text')

            if (!message) {
                return;
            }

            addOptimisticMessage(message);
            formRef.current.reset();

            startTransition( () => {

                sendMessage(formData)

            })


           
        }





  return (
    <div>

        <form ref={formRef} action={formAction} className="flex justify-center items-center mt-10 mx-auto gap-10">

        
        <Input type="text" placeholder="Type your message here..." className="w-1/2 flex justify-center items-center" name="text" />
        <Button type="submit" className="px-4 rounded">
            Send
        </Button>

        </form>


        <div className="mt-10 text-center space-y-2">
            {optimisticMessages.map((message, index) => (
                <div key={index} className=" p-4 rounded mb-2">
                    <p className="font-bold">{message.author}</p>
                    <p>{message.text} {message.sending && <small>Sending....</small>}</p>
                    {/* <p className="text-gray-500 text-sm">{new Date(message?.createdAt).toLocaleString()}</p> */}
                </div>
            ))} 
        </div>




    </div>
  )
}

export default ChatClient
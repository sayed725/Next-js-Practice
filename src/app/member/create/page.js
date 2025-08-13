
"use client"
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@/components/ui/button'
import { createMember } from '@/lib/actions';
import React, { useRef } from 'react'

const CreateMemberPage = () => {

    const formRef = useRef(null);


    const handleSubmit = async (formData) => {


        const result = await createMember(formData);

        if (result.success) {
            alert(result.message);
            formRef.current.reset();
        }
        else {
            alert("Error: " + result.message);
        }   
        



    }





  return (
    <div className='text-center mt-10 min-h-screen'>
       <h1 className='text-center mt-10 text-2xl font-bold'>Create Member</h1>
       <p className='text-center mt-5'>This is the create member page.</p>


         <p className='text-center mt-5'>create a new member here.</p>
       <form ref={formRef} action={handleSubmit}>
        <div className='max-w-md mx-auto mt-10'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border border-gray-200 mt-5 p-2 rounded w-full mb-3"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="border border-gray-200 p-2 mt-5 rounded w-full mb-3"
          />
{/*          
          <Button type="submit" className='rounded-md mt-5'>Create Member</Button> */}

          <SubmitButton/>
        </div>
       </form>
       




    </div>
  )
}

export default CreateMemberPage
// import SubmitButton from '@/components/SubmitButton'
import EditForm from '@/components/EditForm'
import { connectDB } from '@/lib/mongodb';
import { Member } from '@/models/Member';
import React from 'react'

const MemberEditPage = async ( {params}) => {

    const { id } = await params;

    await connectDB();

    const data = await Member.findById(id).lean();
    const member = JSON.parse(JSON.stringify(data));

    // console.log("Member:", member);

    




  return (
     <div className='text-center mt-10 min-h-screen'>
       <h1 className='text-center mt-10 text-2xl font-bold'>Edit Member</h1>
       <p className='text-center mt-5'>This is the Edit member page.</p>


         <p className='text-center mt-5'>Edit a new member here.</p>
         <EditForm member={member}/>
       




    </div>
  )
}

export default MemberEditPage
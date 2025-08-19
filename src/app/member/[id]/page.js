import { Button } from '@/components/ui/button';
import { connectDB } from '@/lib/mongodb';
import { Member } from '@/models/Member';
import Link from 'next/link';
import React from 'react'

const MemberDetails = async({ params }) => {



    const { id } = await params;

    await connectDB();
    const data = await Member.findById(id).lean();
    const member = JSON.parse(JSON.stringify(data));
     

  return (
    <div className='text-center mt-10 min-h-screen'>
         <h1 className='text-center mt-10 text-2xl font-bold'>Member Details</h1>

         <div>
            <h2 className='text-2xl font-bold mt-5'>Name: {member.name}</h2>
            <p className='mt-3'>Email: {member.email}</p>
            <p className='mt-3'>ID: {member._id}</p>
            <p className='mt-3'>Created At: {new Date(member.createdAt).toLocaleDateString()}</p>
            <p className='mt-3'>Updated At: {new Date(member.updatedAt).toLocaleDateString()}</p>
         </div>

        <Link href={`/member/${member._id}/edit`} className='mt-5 inline-block'> 
        <Button>Edit Member</Button>
</Link>
    </div>
  )
}

export default MemberDetails
import { connectDB } from '@/lib/mongodb'
import { Member } from '@/models/Member';
import Link from 'next/link';
import React from 'react'

const MemberPage = async() => {

    await connectDB();

    const data = await Member.find().lean();
    const members = JSON.parse(JSON.stringify(data));





//    console.log("Members:", members);

  return (
    <div className='text-center mt-10 min-h-screen'>
        <h1 className='text-center mt-10 text-2xl font-bold'>Member Page</h1>
        <p className='text-center mt-5'>This is the member page.</p>


        {
            members.length === 0 ? (
                <p className='text-center mt-5'>No members found.</p>
            ) : (
                <div className='mx-auto mt-10 gap-3'>
                    {members.map((member) => (
                        <Link href={`member/${member._id}`} key={member._id} className='border p-5 rounded-lg mb-5'>
                            <h2 className='text-xl font-bold'>{member.name}</h2>
                            <p className='mt-2'>Email: {member.email}</p>
                            <p className='mt-2'>ID: {member._id}</p>
                             <p className='mt-3'>Created At: {new Date(member.createdAt).toLocaleDateString()}</p>
                             <p className='mt-3'>Updated At: {new Date(member.updatedAt).toLocaleDateString()}</p>
                        </Link>
                    ))}
                </div>
            )
        }


    </div>
  )
}

export default MemberPage
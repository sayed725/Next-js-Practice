import { clerkClient } from '@clerk/nextjs/server'
import React from 'react'
import { removeRole, setRole } from './_action'
import { Button } from '@/components/ui/button'

const AdminDashboard = async () => {
  const client = await clerkClient()
  const users = (await client.users.getUserList()).data

  return (
    <div className="min-h-screen p-12 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">
        ADMIN DASHBOARD PAGE ({users.length})
      </h1>

      <h2>Admin dashboard contents will preset here</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border mx-auto  rounded-lg shadow-md">
          <thead className="">
            <tr>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Role</th>
              <th className="px-6 py-3 border-b text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const email = user.emailAddresses.find(
                (email) => email.id === user.primaryEmailAddressId
              )?.emailAddress

              return (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b">
                    {user.firstName || N/A} {user.lastName}
                  </td>
                  <td className="px-6 py-3 border-b">{email}</td>
                  <td className="px-6 py-3 border-b font-bold">
                    {user.publicMetadata.role || "No Role"}
                  </td>
                  <td className="px-6 py-3 border-b text-center space-x-2 flex gap-5">
                    <form action={setRole} className="inline-block">
                      <input type="hidden" value={user.id} name="id" />
                      <input type="hidden" value="admin" name="role" />
                      <Button
                        type="submit"
                        className=""
                      >
                        Make Admin
                      </Button>
                    </form>
                    <form action={setRole} className="inline-block">
                      <input type="hidden" value={user.id} name="id" />
                      <input type="hidden" value="moderator" name="role" />
                      <Button
                        type="submit"
                        className=""
                      >
                        Make Moderator
                      </Button>
                    </form>
                    <form action={removeRole} className="inline-block">
                      <input type="hidden" value={user.id} name="id" />
                      <Button
                        type="submit"
                        className=""
                      >
                        Remove Role
                      </Button>
                    </form>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard

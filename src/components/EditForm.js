"use client";
import React, { use, useActionState } from "react";
import SubmitButton from "./SubmitButton";
import { updateMember } from "@/lib/actions";


const initialState = {
  message: "",
  success: false,
};

const EditForm = ({ member }) => {
  const updateMemberWithId = updateMember.bind(null, member._id);
  const [state, formAction, isPending] = useActionState(updateMemberWithId, initialState);
  
  return (
    <form action={formAction} className="w-full sm:w-1/3 mx-auto mt-10">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          required
          defaultValue={member.name}
          className="border border-gray-200 p-2 rounded w-full mt-1"
          disabled={isPending}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          required
          defaultValue={member.email}
          className="border border-gray-200 p-2 rounded w-full mt-1"
          disabled={isPending}
        />
      </div>
      <SubmitButton isPending={isPending} />

      {state?.message && (
        <div className={`text-center mt-5 ${state.success ? "text-green-500" : "text-red-500"}`}>
          {state.message}
        </div>
      )}
    </form>
  );
};

export default EditForm;
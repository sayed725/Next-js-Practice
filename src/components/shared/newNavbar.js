// app/components/Navbar.tsx
"use client";

import UserProfilePage from "@/app/user-profile/[[...user-profile]]/page";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {

    const { user, isLoaded , isSignedIn } = useUser();

    const role = user?.publicMetadata?.role;

    // console.log("User Role:", role);




  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600 cursor-pointer">
              MyLogo
            </span>
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex gap-6 space-x-8 ">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>


        {/* <div className="text-black">
            {
                isSignedIn ? ( isSignedIn?
                 ( <>
                 {
                    role === "user" && (
                        <Link href="/user-dashboard">
                            <Button className="">
                                User Dashboard
                            </Button>
                        </Link>
                    )
                 }

                 {
                    role === "admin" && (
                        <Link href="/admin-dashboard">
                            <Button className="">
                                Admin Dashboard
                            </Button>
                        </Link>
                    )
                 }

                 {
                    role === "member" && (
                        <Link href="/super-admin-dashboard">
                            <Button className="">
                                Member Dashboard
                            </Button>
                        </Link>
                    )
                 }
                </>) : <p>Hello</p>): <p>Register</p>
            }
        </div> */}





        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <SignedOut>
            <SignInButton mode="modal" className="bg-blue-400 text-black" />
          </SignedOut>

          <SignedIn>
            <UserButton />
           <Link href="/user-profile">
              <Button className="">
                Profile
              </Button>
            </Link>
            <SignOutButton/>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

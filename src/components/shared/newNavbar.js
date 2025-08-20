// app/components/Navbar.tsx
"use client";

import UserProfilePage from "@/app/user-profile/[[...user-profile]]/page";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
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
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

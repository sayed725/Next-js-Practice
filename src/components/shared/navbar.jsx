"use client";
import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { user } = useUser();

  //   console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black shadow-lg sticky top-0 z-10">
      <div className="mx-auto w-11/12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/edugang.png"
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            EDUGANG
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Centered Links */}
          <div className="flex items-center justify-center space-x-4 flex-grow">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#0f82fc] transition capitalize relative before:w-0 hover:before:w-full before:bg-[#0f82fc] before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#0f82fc] transition capitalize relative before:w-0 hover:before:w-full before:bg-[#0f82fc] before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#0f82fc] transition capitalize relative before:w-0 hover:before:w-full before:bg-[#0f82fc] before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
            >
              Blog
            </Link>
            <SignedIn>
              <Link
                href="/posts/create"
                className="text-gray-700 hover:text-[#0f82fc] transition capitalize relative before:w-0 hover:before:w-full before:bg-[#0f82fc] before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
              >
                Create Post
              </Link>
            </SignedIn>
          </div>

          {/* Right-Aligned Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full p-0 cursor-pointer"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={user?.imageUrl || "/placeholder.svg"}
                        alt={user?.fullName || "User"}
                        referrerPolicy="no-referrer"
                      />
                      <AvatarFallback>
                        {user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1 px-2">
                      <p className="text-xs font-medium">
                        {user?.fullName || "User"}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user?.emailAddresses[0].emailAddress}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive font-medium px-4">
                    <SignOutButton>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] hover:text-white"
                      >
                        Sign Out
                      </Button>
                    </SignOutButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>

            <SignedOut>
              <Button
                asChild
                variant="default"
                size="sm"
                className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] hover:text-white"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button
                asChild
                variant="default"
                size="sm"
                className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] hover:text-white"
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="border-none bg-gray-100 text-black">
              <SheetHeader>
                <SheetTitle className="text-2xl font-semibold text-black">
                  EduGang
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 px-5 mt-4">
                <Link
                  href="/"
                  className="text-lg hover:text-[#0f82fc] transition capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-lg hover:text-[#0f82fc] transition capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="text-lg hover:text-[#0f82fc] transition capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <SignedIn>
                  <Link
                    href="/posts/create"
                    className="text-lg hover:text-[#0f82fc] transition capitalize"
                    onClick={() => setIsOpen(false)}
                  >
                    Create Post
                  </Link>
                  <span className="text-sm text-black">
                    Welcome, {user?.fullName}
                  </span>
                  <SignOutButton>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-[#0f82fc] text-white w-1/2 hover:bg-[#0f82fc] hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Out
                    </Button>
                  </SignOutButton>
                </SignedIn>



                <SignedOut>
                   <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] w-1/2 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] w-1/2 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>
                </SignedOut>


              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

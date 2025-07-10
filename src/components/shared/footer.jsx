"use client";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaAngleRight, FaChevronUp } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 bg-[#212229] text-white">
     
      <div className="w-11/12 mx-auto z-10">
        {/* Footer content */}
        <div className="py-10 lg:py-20">
          <div className="flex justify-center sm:justify-between gap-[30px] flex-wrap w-full">
            {/* Logo */}
            <div className="lg:w-[25%] space-y-5">
              <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <img
                  src="/edugang.png"
                  alt="logo"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">EDUGANG</p>
                </div>
              </Link>
              <p>A Smart College Booking Platform for Students </p>
            </div>

            {/* Quick Links */}
            <div className="lg:w-[45%]">
              <h3 className="text-[1.2rem] font-semibold text-white mb-5">
                Quick Links
              </h3>
              <div>
                <ul className="flex text-gray-300 flex-wrap gap-4">
                  <li>
                    <Link href="/" className="hover:text-[white]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-[white]">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-[white]">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Input */}
              <div className="flex gap-3 mt-10 lg:w-2/3 items-center">
                <input
                  type="email"
                  name="email"
                  required
              onChange={() => {}}
                  className="p-2 w-full bg-white text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f82fc]"
                  placeholder="Your Email"
                />
                <Button
                  variant="outline"
                  className="w-1/3 bg-[#0f82fc] text-white hover:bg-[#0f82fc] hover:text-white"
                >
                  Sign Up <FaAngleRight />
                </Button>
              </div>
            </div>

            {/* Address */}
            <div className="lg:w-[20%]">
              <div className="space-y-5 text-gray-300">
                <h3 className="text-[1.2rem] font-semibold text-white mb-5">
                  Address
                </h3>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-[#0f82fc]" /> 55 Main Street,
                  2nd block, New York City
                </p>
                <p className="flex items-center mt-2">
                  <FaEnvelope className="mr-3 text-[#0f82fc]" />{" "}
                  abusayedkhan.pro@gmail.com
                </p>
                <p className="flex items-center mt-2">
                  <FaPhoneAlt className="mr-3 text-[#0f82fc]" /> +880 1627142598
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="/" className="flex justify-center items-center relative bottom-5">
        <Button className="py-5 px-5 bg-[#0f82fc] hover:bg-[#0f82fc] text-white">
          <FaChevronUp />
        </Button>
      </Link>

      {/* Copyright */}
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center max-w-7xl mx-auto text-gray-300">
          <p>
            Copyright @2025, <span className="text-[white]">EduGang</span> All Rights Reserved
          </p>
          <div className="flex space-x-5 text-gray-300 ">
            <a
              href="https://www.facebook.com/abu.ssayed.khan.2024"
              target="_blank"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a href="https://github.com/sayed725" target="_blank" className="hover:text-[#a3c01a]">
              Github
            </a>
            <a
              href="https://www.facebook.com/abu.ssayed.khan.2024"
              target="_blank"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
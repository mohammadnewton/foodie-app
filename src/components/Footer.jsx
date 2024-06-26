import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-[#1e0a00] rounded-lg shadow mx-1 p-8 md:p-12 pt-12 md:pt-24">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8 px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="text-white flex flex-col gap-6">
            <h2 className="text-3xl">
              Foo<span className="text-[#E14B00]">die</span>
            </h2>
            <p className="w-full md:w-80">
              Food order now super easy for everyone. Let&apos;s order your food
              through our website and enjoy your ordering.
            </p>
          </div>
          <div className="text-white flex  flex-wrap gap-8 md:gap-12">
            <div className="grid gap-2">
              <h2>Company</h2>
              <div className="flex flex-col gap-4">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Contact Us</a>
              </div>
            </div>
            <div className="grid gap-8">
              <h2>Features</h2>
              <div className="flex flex-col gap-4 mt-4">
                <a href="">Blog</a>
                <a href="">Support</a>
                <a href="">Privacy</a>
                <a href="">Security</a>
              </div>
            </div>
            <div className="grid gap-2">
              <h2>Support</h2>
              <div className="flex flex-col gap-4">
                <a href="" className="flex gap-4 items-center">
                  <FaPhoneAlt className="text-[#ff7b3d]" /> +254758982500
                </a>
                <a href="" className="flex gap-4 items-center">
                  <MdEmail className="text-[#ff7b3d]" /> newton@gmail.com
                </a>
                <a href="" className="flex gap-4 items-center">
                  <IoLocationSharp className="text-[#ff7b3d]" /> Nairobi, Kenya
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <span className="block text-sm text-gray-500 md:text-center dark:text-gray-400">
            © Copyright 2024 Newton Develops. All Rights Reserved.
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <FaFacebookF className="text-black bg-white w-6 h-6 px-2 rounded-lg hover:bg-[#fd7645] hover:text-white" />
            <FaLinkedinIn className="text-black bg-white w-6 h-6 px-2 rounded-lg hover:bg-[#fd7645] hover:text-white" />
            <FaTwitter className="text-black bg-white w-6 h-6 px-2 rounded-lg hover:bg-[#fd7645] hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

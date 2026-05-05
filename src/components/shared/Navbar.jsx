"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="container mx-auto flex items-center justify-between py-4 mt-4 border-b border-gray-100">
      {/* Logo Section */}
      <div className="font-bold text-xl text-purple-600">
        <Link href="/">Logo</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center text-gray-700 gap-6 font-medium">
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about-us">About</NavLink></li>
        <li><NavLink href="/career">Career</NavLink></li>
      </ul>

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {isPending ? (
          <span className="loading loading-spinner text-purple-500"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold hidden md:block">
              Hello, {user.name}
            </span>
            <Image
              className="rounded-full border border-gray-200"
              src={user.image || userAvatar}
              alt="User avatar"
              width={40}
              height={40}
            />
            <button
              onClick={async () => await authClient.signOut()}
              className="btn btn-sm bg-red-50 hover:bg-red-100 text-red-600 border-none px-4"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-lg transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
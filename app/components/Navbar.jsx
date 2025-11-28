"use client";

import Link from "next/link";
import React from "react";
import { FaUserCircle, FaUtensils } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, UserSignOut } = useAuth();
  const handleSignOut = () => {
    UserSignOut()
      .then(() => {
        toast.success("You signed out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/add-product">Add Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <ToastContainer />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Lite<span className="text-primary">Shop</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "No User"}
              >
                {user.photoURL ? (
                  <Image
                    src={user.photoURL || "/default-user.png"}
                    alt={user.displayName || "User"}
                    width={40}
                    height={40}
                    className="rounded-full border cursor-pointer"
                  />
                ) : (
                  <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
                )}
              </div>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
            >
              <li>
                <Link href="/add-product">Add Products</Link>
              </li>
              <li>
                <Link href="/my-products">My Products</Link>
              </li>
              {/* <li>
                <Link href="/">My Favorites</Link>
              </li> */}
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/auth/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

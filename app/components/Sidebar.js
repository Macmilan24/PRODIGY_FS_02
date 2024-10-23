"use client";

import { signOut } from "next-auth/react";

export default function Sidebar({ setView }) {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>
        <button
          className=" mb-4 p-2 bg-gray-700 w-full"
          onClick={() => setView("all")}
        >
          All Employees
        </button>
        <button
          className="mb-4 p-2 bg-gray-700 w-full"
          onClick={() => setView("add")}
        >
          Add New Employee
        </button>
      </div>
      <button
        className="p-2 bg-red-500"
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
      >
        Logout
      </button>
    </div>
  );
}

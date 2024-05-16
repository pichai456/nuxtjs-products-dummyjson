"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div className="flex justify-center items-center w-full h-[300px] bg-gradient-to-r from-violet-800 to-violet-200">
      <div className="mx-10 my-5"></div>
      <div className="flex flex-col  justify-center items-center">
        <h3 className="text-5xl text-white">NuxtJs Product Finder App</h3>
        <p className="text-xl text-white mt-3">Find your favourite products</p>
        <form action="" onSubmit={handleSubmit}>
          <Link
            href={"/"}
            onClick={() => handleInput("")}
            className="rounded-md px-3 py-2 text-white bg-violet-800 mr-3"
          >
            Home
          </Link>
          <input
            type="text"
            className="w-[500px] bg-gray-200  border-none rounded-md text-lg px-3 py-2 mt-3"
            placeholder="Search products..."
            onChange={handleInput}
          />
          <button className="bg-green-500 mx-3 rounded-md px-3 py-2 text-white font-semibold">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;

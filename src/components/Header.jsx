"use client";
import Image from "next/image";
import { useEffect,useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";

export default function Header({startTour}) {
  

    return (
        <div className="flex flex-row w-full px-5 py-1 items-center">
        <div className="mx-2 my-1">
          <Image
            src="/images/Preview.png"
            className="rounded-lg"
            alt="This is a Logo"
            width={50}
            height={30}
          />
        </div>
        <div className="max-w-3xl flex-grow">
          
          <form>
            <input className="w-full px-3 py-3 font-semibold rounded-lg bg-amber-400 placeholder-black"  type="text" placeholder="Search here..." autoFocus/>
          </form>
        </div>
        <div className="ml-auto flex flex-row items-center space-x-2">
        <button className="font-semibold text-lg flex flex-row items-center justify-center border border-gray-100 bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md" onClick={startTour}>Start Tour <VscDebugStart/> </button>
          <button className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-md tracking-wider">Login</button>
          <button>
            <FaShoppingCart className="text-[1.5rem]" />
          </button>
        </div>
        </div>
    )
}
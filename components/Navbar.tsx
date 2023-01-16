import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect } from "react";

import { BsEyeglasses, BsStars } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <nav className="h-[110px] w-full flex flex-col items-center justify-center">
      <section className="max-w-3xl p-2 flex flex-row justify-between w-full">
        <Link href="/">
          <div className="flex items-center gap-1 ">
            <BsEyeglasses className="text-4xl sm:text-3xl" />
            <h1 className="invisible sm:text-lg sm:visible">Bookeep</h1>
          </div>
        </Link>
        <Searchbar />
      </section>
      <ul className="flex w-full max-w-3xl justify-center items-center gap-5 text-sm text-gray-600 md:text-base">
        <Link href="/">
          <li className="flex flex-col items-center gap-1">
            <p>Home</p>
            <AiFillHome />
          </li>
        </Link>
        <Link href="/rankings">
          <li className="flex flex-col items-center gap-1">
            <p>Rankings</p>
            <BsStars />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

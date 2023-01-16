import React from "react";

import { BsEyeglasses } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black rounded-tl-3xl p-5 text-white text-xl flex flex-wrap gap-5 justify-center">
      <div className="flex gap-2">
        <BsEyeglasses className="text-4xl sm:text-3xl" />
        <h1>Bookeep</h1>
      </div>
      <div className="flex items-center">
        <h1>2023Bookeep</h1>
        <MdOutlineCopyright />
      </div>
    </footer>
  );
}

export default Footer;

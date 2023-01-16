import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";
import { AppContext } from "../src/contexts/global.state";

import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const { Searching } = useContext(AppContext);

  function handleBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Searching();

    router.push(`/books/${search}/1`);
  }

  return (
    <form
      onSubmit={handleBook}
      className="flex items-center p-1 bg-gray-200 rounded-md w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Search for book, magazine"
        onChange={(e) => setSearch(e.target.value)}
        className="px-1 bg-transparent w-full outline-none text-sm"
      />
      <button>
        <AiOutlineSearch className="text-xl" />
      </button>
    </form>
  );
}

export default Searchbar;

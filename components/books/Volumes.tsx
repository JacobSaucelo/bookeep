import { useEffect } from "react";
import Image from "next/image";

import AllTime from "../../src/temp/popularBooksLess.json";

import { FaFireAlt } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";

function Volumes(volumes: any) {
  return (
    <section className="p-2 max-w-3xl">
      <aside className="flex flex-row items-center justify-between text-2xl">
        <div className="flex items-center gap-1">
          <MdOutlineStars className="text-yellow-400" />
          <h1 className="font-AlegreyaSans font-semibold text-2xl my-5">
            All Time Favorites
          </h1>
        </div>

        <Image
          src={"/images/svgs/books.svg"}
          height={80}
          width={80}
          alt="popular image"
        />
      </aside>
      <aside className="grid grid-cols-1 md:grid-cols-2">
        {AllTime.map((book) => (
          <div
            className="flex items-center gap-3 border m-2 p-2 bg-gray-200 rounded-md shadow-lg"
            key={book.Rank}
          >
            <h3 className="text-2xl p-2">{book.Rank}</h3>
            <section className="border-l border-blue-300 p-2">
              <h2 className="text-lg">{book.Title}</h2>
              <p className="text-gray-600">
                Sold over{" "}
                <span className="text-red-500">
                  {book.Volume_Sales.toLocaleString()}
                </span>{" "}
                copies.
              </p>
              <p className="text-xs text-blue-500">by {book.Author}</p>
            </section>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default Volumes;

{
  /* 

<p>Rank: {test.Rank}</p>
<p>Title: {test.Title}</p>
<p>Author: {test.Author}</p>
<p>Volume_Sales: {test.Volume_Sales}</p>
<p>Editions_Combined: {test.Editions_Combined}</p>
<p>Imprint: {test.Imprint}</p>
<p>Publisher: {test.Publisher}</p>
<p>Publication_Date: {test.Publication_Date}</p>
<p>Genre: {test.Genre}</p> 

*/
}

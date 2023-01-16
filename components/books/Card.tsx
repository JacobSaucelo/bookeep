import Image from "next/image";
import React from "react";

import { VolumeInfo } from "../../src/interfaces/book/volumeInfo.d";

import { GiQuillInk } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";

function Card({ volumeInfo }: { volumeInfo: VolumeInfo }) {
  const {
    title,
    imageLinks,
    description,
    authors,
    publisher,
    categories,
    language,
    maturityRating,
  } = volumeInfo;

  return (
    <div className="flex flex-col border p-2 w-full max-w-[300px] shadow-lg">
      <Image
        src={imageLinks ? imageLinks.smallThumbnail : "/images/available.jpg"}
        height={100}
        width={100}
        alt={`${title} cover page`}
        className="h-[300px] w-full object-cover rounded-sm hover:scale-95 ease-linear duration-200"
      />
      <aside className="flex flex-col gap-2">
        <h4 className="text-lg text-center overflow-hidden text-ellipsis line-clamp-3 mt-3">
          {title}
        </h4>
        <h5 className="line-clamp-4 text-md text-gray-600 text-center">
          {description}
        </h5>
        <p className="text-sm flex justify-evenly gap-2 my-2">
          <span className="text-red-700 flex items-center gap-1">
            <GiQuillInk />
            {authors ? authors[0] : publisher}
          </span>
          <span className="text-blue-500 flex items-center gap-1">
            <IoMdPerson />
            {volumeInfo.publishedDate}
          </span>
        </p>
      </aside>
      <aside className="flex gap-1 justify-center my-2 text-white text-center">
        {categories &&
          categories.map((category, index) => (
            <p
              className="px-2 py-1 bg-red-700 rounded-md"
              key={category + index}
            >
              {category}
            </p>
          ))}
      </aside>
    </div>
  );
}

export default Card;

import Image from "next/image";
import React from "react";
import { Book } from "../../src/interfaces/book/book.d";

function CardVol({ book }: { book: Book }) {
  const { volumeInfo } = book;

  return (
    <div key={book.id} className="flex flex-row gap-1 p-2 border">
      <div className="relative h-[140px] w-[120px] inline-block p-2 cursor-pointer hover:scale-105 ease duration-300">
        <Image
          src={volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
          height={100}
          width={100}
          className="object-cover absolute h-full"
        />
      </div>
    </div>
  );
}

export default CardVol;

import { GetServerSideProps } from "next";

import { useEffect, useState } from "react";

import { VolumeTypes } from "../src/interfaces/bookshelves/volume.d";
import { Book } from "../src/interfaces/book/book.d";

import CardVol from "../components/volumes/CardVol";
import Volumes from "../components/books/Volumes";

type HomeTypes = {
  quoteData: {
    quote: string;
    author: string;
  };
};

export default function Home({ quoteData }: HomeTypes) {
  const [bookShelf, setBookShelf] = useState<VolumeTypes[]>([]);
  const [volumes, setVolumes] = useState<Book[][] | []>([]);

  const fetchBookshelf = async () => {
    await fetch(
      "https://www.googleapis.com/books/v1/users/117522004192189783614/bookshelves"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setBookShelf(data.items));
  };

  const fetchVolumes = async () => {
    const books = bookShelf.slice(1, 5).map(async (book) => {
      await fetch(
        `https://www.googleapis.com/books/v1/users/117522004192189783614/bookshelves/${book.id}/volumes`
      )
        .then((res) => res.json())
        .then((data) => setVolumes((prevState) => [...prevState, data.items]));
    });
  };

  useEffect(() => {
    fetchBookshelf();
  }, []);

  useEffect(() => {
    fetchVolumes();
  }, [bookShelf]);

  return (
    <div className="flex flex-col gap-3 items-center justify-center p-2">
      <section className="bg-black w-full max-w-3xl rounded-lg p-5">
        {/* <Image
          src="/images/backgrounds/background2L.jpg"
          alt="Obelisk banner books background hero"
          fill
        /> */}

        <div className="text-center">
          <blockquote className="font-Alegreya font-semibold text-xl text-blue-300">
            &quot;{quoteData.quote}&quot;
          </blockquote>
          <cite className="font-AlegreyaSans text-xl text-gray-500">
            - {quoteData.author}
          </cite>
        </div>
      </section>

      <Volumes volumes={volumes} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://api.themotivate365.com/stoic-quote");
  const quote = await response.json();

  return {
    props: {
      quoteData: quote,
    },
  };
};

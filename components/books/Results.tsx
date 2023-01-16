import Link from "next/link";
import React from "react";
import { Book } from "../../src/interfaces/book/book.d";
import Card from "./Card";

type ResultsType = {
  data: Book[];
};

function Results({ data }: ResultsType) {
  return (
    <section className="grid grid-col-1 gap-2 justify-items-center p-5 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((book) => (
        <Link href={`/book/${book.id}`} key={book.id}>
          <Card volumeInfo={book.volumeInfo} />
        </Link>
      ))}
    </section>
  );
}

export default Results;

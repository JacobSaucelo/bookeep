import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useEffect, useContext } from "react";
import Loading from "../../../../components/books/Loading";
import Results from "../../../../components/books/Results";
import Pagination from "../../../../components/reusables/Pagination";
import { AppContext } from "../../../../src/contexts/global.state";
import { Books } from "../../../../src/interfaces/book/book.d";

type SearchResultsTypes = {
  searchTerm: string;
  page?: string;
  results: Books;
};

function SearchResults({ searchTerm, page, results }: SearchResultsTypes) {
  const { items, totalItems } = results;
  const { SearchState, Searched } = useContext(AppContext);

  useEffect(() => {
    if (items.length > 0) Searched();
  }, [items]);

  if (SearchState) return <Loading />;

  return (
    <section className="px-5 flex flex-col gap-1 items-center">
      <div className="flex flex-row justify-between items-center w-full max-w-4xl bg-blue-200 p-2 rounded-lg">
        <aside>
          <h1 className="text-lg capitalize sm:text-2xl">
            You&quot;ve searched for the term &quot;{searchTerm}&quot;
          </h1>

          <h2 className="text-sm text-gray-500">
            About <span className="text-red-700">{totalItems}</span> books found
          </h2>
        </aside>
        <Image
          src="/images/svgs/search.svg"
          height={80}
          width={80}
          alt="search image"
        />
      </div>

      <Results data={items} />
      <Pagination
        page={Number(page)}
        allPages={Number(results.totalItems)}
        searchTerm={searchTerm}
      />
    </section>
  );
}

export default SearchResults;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { bookId, page } = context.query;

  const getData = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookId}&startIndex=${
      Number(page) * 10
    }`
  );
  const response = await getData.json();

  return {
    props: {
      searchTerm: bookId,
      page,
      results: response,
    },
  };
};

import Link from "next/link";
import { useState, useEffect, useMemo, useContext } from "react";
import { AppContext } from "../../src/contexts/global.state";

type PaginationTypes = {
  page: number;
  allPages: number;
  searchTerm: string;
};

function Pagination({ page, allPages, searchTerm }: PaginationTypes) {
  const [pageNumber, setPageNumber] = useState<number[] | []>([]);
  const { Searching } = useContext(AppContext);

  const handlePages = useMemo(() => {
    const limiter = Math.ceil(allPages / 10);
    for (let i = 1; i < limiter; i++) {
      setPageNumber((prevState) => [...prevState, i]);
    }
  }, [page]);

  useEffect(() => {
    handlePages;
  }, [page]);

  let showedPages;
  if (page < 3) {
    showedPages = pageNumber.slice(0, 5);
  } else {
    showedPages = pageNumber.slice(page - 3, page + 2);
  }

  return (
    <section className="m-auto p-5">
      <div className="flex gap-1">
        {showedPages.map((pagei) => (
          <Link
            href={`/books/${searchTerm}/${pagei}`}
            key={pagei}
            onClick={() => Searching()}
          >
            <div className="h-[50px] w-[50px] flex items-center justify-center border border-red-700">
              <p className="text-xl">{pagei}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Pagination;

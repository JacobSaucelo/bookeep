import React from "react";
import ranks from "../../src/temp/booksData.json";

function index() {
  return (
    <section className="p-5">
      <div className="flex flex-col gap-2 max-w-2xl m-auto">
        {ranks.map(
          ({
            Rank,
            Title,
            Author,
            Volume_Sales,
            Publisher,
            Genre,
            Publication_Date,
          }) => (
            <div
              className="flex flex-row items-center justify-between gap-2 border p-3 rounded-md bg-gray-200 shadow-md"
              key={Rank}
            >
              <div className="flex items-center gap-3">
                <h2 className="text-3xl p-2">{Rank}</h2>
                <aside className="text-xs border-l border-red-300 px-3 sm:text-sm">
                  <h1 className="text-sm sm:text-lg">{Title}</h1>
                  <p className="text-blue-500">By {Author}</p>
                  <p>{Publisher}</p>
                  <p>{Genre}</p>
                  <p>{Publication_Date}</p>
                </aside>
              </div>
              <div className="text-base text-center">
                <h4 className="text-2xl text-red-500">
                  {Volume_Sales.toLocaleString()}
                </h4>
                <p>Copies sold!</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default index;

const getStaticProps = () => {};

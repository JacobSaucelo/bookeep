import React from "react";

import { AiFillPicture } from "react-icons/ai";

function Loading() {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="px-5 flex flex-col gap-1 items-center">
      <div className="flex flex-col gap-2 w-full max-w-5xl">
        <div className="h-8 w-3/5 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-4 w-1/3 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      <div className="grid grid-col-1 gap-2 p-5 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((id) => (
          <div
            className="flex flex-col gap-2 border p-2 w-full max-w-[300px] m-auto shadow-lg"
            key={id}
          >
            <aside className="w-full h-[300px] bg-gray-300 flex items-center justify-center animate-pulse">
              <AiFillPicture className="text-6xl text-white" />
            </aside>
            <aside className="flex flex-col gap-2">
              <div className="h-6 w-full bg-gray-300 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-2/3 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-4 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-4/5 rounded-full animate-pulse"></div>
              <div className="text-sm flex justify-evenly gap-2 my-2">
                <div className="bg-gray-300 h-3 w-4/5 rounded-full animate-pulse"></div>
                <div className="bg-gray-300 h-3 w-4/5 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gray-300 h-5 w-1/2 m-auto rounded-full animate-pulse"></div>
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Loading;

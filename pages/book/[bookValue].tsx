import { GetServerSideProps } from "next";
import Image from "next/image";
import { Book } from "../../src/interfaces/book/book.d";

import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

function Index({ book }: { book: Book }) {
  const {
    title,
    subtitle,
    description,
    authors,
    publisher,
    publishedDate,
    language,
    maturityRating,
    pageCount,
    printType,
    imageLinks,
    dimensions,
    contentVersion,
    categories,
  } = book.volumeInfo;
  const { country, saleability, isEbook } = book.saleInfo;

  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl text-lg px-2">
        <button
          className="flex items-center gap-1"
          onClick={() => router.back()}
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      <div className="flex flex-col items-center justify-evenly gap-2 w-full max-w-3xl my-4 p-4 sm:flex-row">
        <div>
          {imageLinks.smallThumbnail ? (
            <Image
              src={imageLinks.smallThumbnail}
              height={200}
              width={200}
              alt={title}
            />
          ) : (
            <Image
              src={imageLinks.thumbnail}
              height={200}
              width={200}
              alt={title}
            />
          )}
        </div>

        <div className="flex flex-col items-center justify-center border max-w-[400px] p-3 text-center shadow-lg">
          <h1 className="text-xl">{title}</h1>
          <h4 className="text-lg">{subtitle}</h4>
          <div className="flex gap-2 justify-center text-sm">
            By{" "}
            {authors.map((author, index) => (
              <p key={author + index}>{author}</p>
            ))}
          </div>
          <h5 className="text-sm">{publisher}</h5>
          <p>{publishedDate}</p>
          <p>{language}</p>
          <p>{categories.length > 1 ? categories[0 + 1] : categories[0]}</p>
          <p>
            {maturityRating === "MATURE" ? "18+ mature content" : "rated pg"}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border text-justify w-full max-w-3xl p-4 shadow-lg">
        <div className="flex gap-2 justify-between">
          {/* <p>Over {pageCount} pages</p> */}
          <p>Description</p>
          <p>{contentVersion}</p>
        </div>
        <p className="text-sm indent-5">
          {description
            .replaceAll(/[.*+?^${}()|[\]\\]></g, "\\$&")
            .replaceAll(/[<]br[^>]*[>]/gi, "")
            .replaceAll(/[<]b[^>]*[>]/gi, "")
            .replaceAll(/[<]i[^>]*[>]/gi, "")
            .replaceAll("</b>", "")
            .replaceAll("</i>", "")
            .replaceAll("—", " ")}
        </p>
      </div>

      {/* <div className="bg-blue-300">
        <h1>{country}</h1>
        <p>{saleability}</p>
        <p>{isEbook && "e-book"}</p>
        <div>
          <h1>height {dimensions.height}</h1>
          <h1>thickness {dimensions.thickness}</h1>
          <h1>width {dimensions.width}</h1>
        </div>
      </div> */}
    </section>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { bookValue } = context.query;

  const getBookData = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookValue}`
  );
  const bookData = await getBookData.json();

  return {
    props: {
      book: bookData,
    },
  };
};

import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";
import BookStock from "./BookStock";
import BookImg from "./BookImg";
import Link from "next/link";

const Book = ({ book }) => {
  return (
    <Link href={`/store/${book.id}`}>
      <div className="flex flex-col items-center justify-center bg-white rounded text-center p-4 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-sm font-medium">{book.title}</h3>
        </div>

        <BookImg img={book.cover} title={book.title} />

        <div className="flex flex-col justify-around truncate rounded-xl bg-white px-4 py-8 w-full text-xs">
          <div className="flex justify-around">
            <BookStock book={book} />

            <div className="flex">
              <CurrencyRupeeIcon className="w-5 mr-0.5" />
              <span className="text-sm"> {book.sellPrice} to buy</span>
            </div>
          </div>

          <div className="mt-2 text-center">
            <p className="text-sm">Rent for {book.rentPrice} INR per month</p>

            <p className="text-xs">
              {book.isRented
                ? `Currently this book is rented by ${book?.renterIds?.length} customer`
                : `Currently no one has rented this book`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

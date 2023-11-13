import { ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

const BookStock = ({ book }) => {
  return (
    <div>
      {book.stock ? (
        <div className="flex">
          <ArchiveBoxIcon className="w-5 mr-1" />
          <span className="text-sm">{book.stock} in stock</span>
        </div>
      ) : (
        <div className="flex">
          <ArchiveBoxXMarkIcon className="w-5 mr-1" />
          <span className="text-sm">No Stock</span>
        </div>
      )}
    </div>
  );
};

export default BookStock;

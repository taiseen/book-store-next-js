"use client";
import { BookmarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { intention, toastOption } from "@/constants/data";
import { useStoreContext } from "@/context/provider";
import { toast } from "react-toastify";

const AddToCart = ({ book }) => {
  const { bookCart, setBookCart } = useStoreContext();

  const handleAddToCart = (e, reason) => {
    e.preventDefault();

    // write operation - create new object with new [property:value]
    const newBook = { ...book, type: reason };

    const isBuying = reason === intention.buy;
    const isRenting = reason === intention.rent;

    const isBookPresent = bookCart.some(
      (book) => book.id === newBook.id && book?.type === newBook.type
    );

    const addToCart = () => {
      // set data into context api - for global access between components...
      setBookCart([...bookCart, newBook]);
      toast.success(`Add ${book.title} to cart`, toastOption);
    };

    if (isBuying) {
      isBookPresent
        ? toast.error(`This book already added into cart`, toastOption)
        : addToCart();
    }

    if (isRenting) {
      isBookPresent
        ? toast.error(`You already rent this book`, toastOption)
        : addToCart();
    }
  };

  return (
    <div className="flex items-center justify-evenly gap-3 w-full mt-3 border-t-2 pt-3">
      <button
        className="btn"
        onClick={(e) => handleAddToCart(e, intention.rent)}
      >
        <BookmarkIcon className="w-5 mr-2 inline" />
        {intention.rent}
      </button>

      <button
        className="btn"
        onClick={(e) => handleAddToCart(e, intention.buy)}
      >
        <ShoppingCartIcon className="w-5 mr-2 inline" />
        {intention.buy}
      </button>
    </div>
  );
};

export default AddToCart;

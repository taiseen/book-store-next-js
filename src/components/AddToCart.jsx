"use client";
import { BookmarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const AddToCart = ({ book }) => {
  const handleAddToCart = (e, reason) => {
    e.preventDefault();

    const newBook = { ...book, type: reason };
    
    toast.success(`Add ${book.title} to cart`, {
      autoClose: 2000,
      position: "top-right",
    });
  };

  return (
    <div className="flex items-center justify-evenly gap-3 w-full mt-3 border-t-2 pt-3">
      <button className="btn" onClick={(e) => handleAddToCart(e, "Rent")}>
        <BookmarkIcon className="w-5 mr-2 inline" />
        Rent
      </button>

      <button className="btn" onClick={(e) => handleAddToCart(e, "Buy")}>
        <ShoppingCartIcon className="w-5 mr-2 inline" />
        Buy
      </button>
    </div>
  );
};

export default AddToCart;

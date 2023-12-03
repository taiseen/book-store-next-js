"use client";
import { useStoreContext } from "../../context/provider";

const ProductList = () => {
  const { bookCart, setBookCart } = useStoreContext(); // get data form context api...

  const handleBookIncrement = (book) => {
    const quantityUpdate = { ...book, quantity: book.quantity++ };
    const data = bookCart.map((bookObj) =>
      bookObj.id === book.id ? quantityUpdate : bookObj
    );
    
    // setBookCart(data);
  };

  const handleBookDecrement = (book) => {
    const quantityUpdate = { ...book, quantity: book.quantity-- };
  };

  const handleBookRemove = (book) => {
    const bookRemoved = bookCart.filter((bookObj) => bookObj.id !== book.id);
    setBookCart(bookRemoved);
  };

  return (
    <div className="bg-white p-4 w-full mb-8 rounded shadow-md space-y-2">
      {bookCart.map((book) => (
        <div
          key={book.id + book.type}
          className="p-2 rounded shadow flex items-center justify-between bg-gray-300/70"
        >
          <div>
            <p>{book.type}</p>

            <p>{book.title}</p>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-2">
              <button
                className="w-6 rounded text-white bg-slate-500 text-lg cursor-pointer"
                onClick={() => handleBookIncrement(book)}
              >
                +
              </button>
              {book.quantity}
              <button
                className="w-6 rounded text-white bg-slate-500 text-lg cursor-pointer"
                onClick={() => handleBookDecrement(book)}
              >
                -
              </button>
            </div>

            <button
              className="w-6 rounded text-white bg-red-400 text-lg cursor-pointer"
              onClick={() => handleBookRemove(book)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

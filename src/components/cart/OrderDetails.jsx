"use client";
import { useStoreContext } from "../../context/provider";
import { intention } from "../../constants/data";

const OrderDetails = () => {
  const { bookCart } = useStoreContext(); // get data form context api...

  const buyingBooks = bookCart.filter((book) => book.type === intention.buy);
  const rentingBooks = bookCart.filter((book) => book.type === intention.rent);

  const buyPrice = buyingBooks.reduce((total, book) => total + book.sellPrice, 0);
  const rentPrice = rentingBooks.reduce((total, book) => total + book.rentPrice, 0);


 return (
    <div className="w-full bg-white rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl pb-4">OrderDetails</h2>
      {
        <ul>
          <li>Buying {buyingBooks.length} books for {buyPrice} BDT</li>
          <li>Renting {rentingBooks.length} books for {rentPrice} BDT</li>
        </ul>
      }
    </div>
  );
};

export default OrderDetails;

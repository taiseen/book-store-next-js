"use client";
import { useStoreContext } from "../../context/provider";
import { intention } from "../../constants/data";

const OrderDetails = () => {
  const { bookCart } = useStoreContext(); // get data form context api...

  const buyingBooks = bookCart.filter((book) => book.type === intention.buy);
  const rentingBooks = bookCart.filter((book) => book.type === intention.rent);

  const totalBuyingBooks = buyingBooks.length;
  const totalRentingBooks = rentingBooks.length;

  const buyPrice = buyingBooks.reduce(
    (total, book) => total + book.sellPrice,
    0
  );
  const rentPrice = rentingBooks.reduce(
    (total, book) => total + book.rentPrice,
    0
  );

  const deliveryPrice = 5;
  const totalAmount = buyPrice + rentPrice + deliveryPrice;

  return (
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl pb-4">OrderDetails</h2>
      {
        <ul>
          {totalBuyingBooks > 0 && (
            <li>
              Buying {totalBuyingBooks} books for {buyPrice} BDT
            </li>
          )}

          {totalRentingBooks > 0 && (
            <li>
              Renting {totalRentingBooks} books for {rentPrice} BDT
            </li>
          )}
        </ul>
      }
      <p className="mt-2 font-bold">With Delivery total cost: {totalAmount} BDT</p>
    </div>
  );
};

export default OrderDetails;

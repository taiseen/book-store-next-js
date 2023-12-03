import OrderDetails from "../../../components/cart/OrderDetails";
import ProductList from "../../../components/cart/ProductList";
import Payment from "../../../components/cart/Payment";

const CartPage = () => {
  return (
    <div className="p-2 self-start">
      <h2 className="text-3xl">Welcome Mr. UserName</h2>

      <p className="text-xl my-2 text-zinc-600">
        Thanks for purchasing. Please Complete this checkout process
      </p>

      <div className="flex gap-2">
        <ProductList />

        <div className=" flex flex-wrap xs:flex-col justify-center">
          <OrderDetails />
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

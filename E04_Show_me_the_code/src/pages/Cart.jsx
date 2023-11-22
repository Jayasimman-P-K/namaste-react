import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/ItemList";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearItem());
  };

  return (
    <div className="w-6/12 mx-auto mt-36">
      <div className=" m-5 p-2 flex justify-between">
        <h1 className="text-xl font-bold">Cart Items </h1>
        <button
          className="mx-4 rounded-lg hover:bg-red-50 hover:scale-105 p-2 px-4 border-red-400 border-2"
          onClick={clearCartItems}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1 className=" text-center text-2xl m-10">Your Cart Is Empty 🛒</h1>
      )}

      <div className="shadow-md">
        <ItemList
          items={cartItems}
          addBtn={"Remove"}
          reducerFunc={removeItem}
        />
      </div>
    </div>
  );
};

export default Cart;

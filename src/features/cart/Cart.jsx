import {useDispatch, useSelector} from "react-redux";

import {clearCart, getCart, getUsername} from "./cartSlice";

import LinkButton from "../../ui/LinkButton";
import Buttton from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 sm:text-xl text-base font-semibold">
        Your cart, {username}
      </h2>

      <ul className="mt-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.donutId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Buttton to="/order/new">Order Donuts</Buttton>
        <Buttton type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Buttton>
      </div>
    </div>
  );
}

export default Cart;

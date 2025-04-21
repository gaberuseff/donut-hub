import {Link} from "react-router-dom";
import {formatCurrency} from "../../utils/helpers";
import {useSelector} from "react-redux";
import {getCartPrice, getCartQuantity} from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantity);
  const totalCartPrice = useSelector(getCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="bg-secondary-900 text-stone-100 px-4 py-5 
        sm:px-6 flex items-center justify-between 
        sm:text-xl text-md uppercase absolute  top-0 left-0 w-full">
      <p className="space-x-3">
        <span>{totalCartQuantity} donuts</span>
        <span className="font-bold">{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="hover:underline underline-offset-4">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;

import {formatCurrency} from "../../utils/helpers";

import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({item}) {
  const {donutId, name, quantity, totalPrice} = item;

  return (
    <li className="py-3 sm:py-4 text-secondary-900 sm:flex sm:items-center sm:justify-between">
      <p className="sm:text-lg mb-1 sm:mb-0 font-bold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-bold sm:text-lg">{formatCurrency(totalPrice)}</p>

        <div className="flex gap-4">
          <UpdateItemQuantity donutId={donutId} currentQuantity={quantity} />
          <DeleteItem donutId={donutId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;

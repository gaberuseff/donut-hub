import {useDispatch, useSelector} from "react-redux";
import {formatCurrency} from "../../utils/helpers";

import {addItem, getCurrentQuantityById} from "../cart/cartSlice";

import Button from "../../ui/Button";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({donut, isOpen}) {
  const dispatch = useDispatch();
  const {id, name, unitPrice, ingredients, soldOut, image} = donut;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handelAddToCart() {
    const newItem = {
      donutId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li
      className="font-secondary flex  gap-2 py-3 sm:py-6 
        sm:text-xl text-md tracking-wider text-secondary-900">
      <img
        src={image}
        alt={name}
        className={`w-28 h-28 sm:w-56 sm:h-36 ${
          soldOut ? " text-secondary-200" : ""
        }`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-secondary-500 italic capitalize w-[80%]">
          {ingredients}
        </p>
        <div className="mt-auto font-semibold flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-500">Sold out</p>
          )}

          {isInCart && (
            <div className="flex flex-col gap-3">
              <UpdateItemQuantity
                currentQuantity={currentQuantity}
                donutId={id}
              />
            </div>
          )}

          {!soldOut && !isInCart && isOpen && (
            <Button type="small" onClick={handelAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

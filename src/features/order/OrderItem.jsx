import {formatCurrency} from "../../utils/helpers";

function OrderItem({item, isLoadingIngredients, ingredients}) {
  const {quantity, name, totalPrice} = item;

  return (
    <li className="py-3">
      <div className="flex justify-between items-center">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>

      <p className="mt-1 text-sm text-stone-400">
        {isLoadingIngredients ? "Loading..." : ingredients}
      </p>
    </li>
  );
}

export default OrderItem;

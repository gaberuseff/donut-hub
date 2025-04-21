import {useDispatch} from "react-redux";
import {decreaseItemQuantity, increaseItemQuantity} from "./cartSlice";

import Button from "../../ui/Button";

function UpdateItemQuantity({donutId, currentQuantity}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(donutId))}>
        -
      </Button>
      <span className="text-center p-1 font-secondary text-sm font-bold">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(donutId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;

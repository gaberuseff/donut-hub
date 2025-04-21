import {useDispatch} from "react-redux";
import Button from "../../ui/Button";
import {deleteItem} from "./cartSlice";

function DeleteItem({donutId}) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(donutId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

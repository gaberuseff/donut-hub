import {useSelector} from "react-redux";
import {getUsername} from "../cart/cartSlice";

function Username() {
  const username = useSelector(getUsername);

  if (!username) return null;
  return (
    <div className="font-bold text-lg md:block hidden cursor-pointer">
      {username}
    </div>
  );
}

export default Username;

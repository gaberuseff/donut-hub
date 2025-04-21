import {useSelector} from "react-redux";
import {getUsername} from "../features/cart/cartSlice";

import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="my-14 text-center">
      <h1
        className="flex flex-col gap-2 text-xl md:text-3xl font-bold text-secondary-600
          mb-6 px-3">
        <span>
          {username === "" ? "The best donut." : `Welcome ${username}`}
        </span>
        <span className="text-secondary-900">
          Straight out of the bakery, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">Continu Ordring</Button>
      )}
    </div>
  );
}

export default Home;

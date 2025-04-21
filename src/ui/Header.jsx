import {Link} from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="flex justify-between items-center sm:px-6 px-4 py-4
      bg-primary-100 text-secondary-900 shadow-[0_1px_3px_rgba(0,0,0,0.01)] uppercase">
      <Link to="/" className="font-semibold sm:text-2xl text-lg tracking-wide">
        Donut Hub
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;

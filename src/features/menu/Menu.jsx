import {useLoaderData} from "react-router-dom";
import {getMenu} from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul
      className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-x-12
      px-2 divide-y divide-stone-200">
      {menu.map((donut) => (
        <MenuItem key={donut.id} donut={donut} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;

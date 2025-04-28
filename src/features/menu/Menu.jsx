import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {getMenu, getStaticVariable} from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";
import WeClosed from "../../ui/WeClosed";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useLoaderData();

  // handel promises
  useEffect(() => {
    getStaticVariable()
      .then((data) => {
        setIsOpen(data[0].isOpen);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <div className=" bg-red-400 text-white px-4 py-2 text-center top-0 w-full">
          {!isOpen && <WeClosed />}
        </div>
      )}
      <ul
        className="mt-3 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12
      px-2 divide-y divide-stone-200">
        {menu.map((donut) => (
          <MenuItem key={donut.id} donut={donut} isOpen={isOpen} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;

import {useFetcher, useLoaderData} from "react-router-dom";
import {getOrder, getStaticVariable} from "../../services/apiRestaurant";
import {formatCurrency} from "../../utils/helpers";

import OrderItem from "./OrderItem";
import {useEffect} from "react";

const data = await getStaticVariable();
const {deliveryPrice} = data[0];

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load(`/menu`);
  }, [fetcher]);

  if (!order) return;

  const {id} = order;
  const {
    customer,
    phone,
    orderPrice,
    status,
    cart,
    address,
    position,
    orderDate,
  } = order;

  const positionOnMap =
    position &&
    `https://www.google.com/maps/@${position.latitude},${position.longitude},57452m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D`;

  return (
    <div className="py-6 px-4 sm:space-y-8 space-y-6 font-secondary text-gray-800">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center">
        <h2 className="sm:text-2xl text-xl font-semibold  mb-2">Order #{id}</h2>

        <div>
          <span
            className={`font-bold uppercase sm:text-base text-sm text-white py-1 px-2 rounded-full tracking-widest ${
              status === "preparing"
                ? "bg-blue-500"
                : status === "delivered"
                ? "bg-green-500"
                : "bg-gray-400"
            }`}>
            {status === "delivered" ? "delivered " : "Preparing "}
          </span>
        </div>
      </div>

      <div className="sm:text-xl text-base flex sm:flex-row sm:justify-between flex-col gap-2 bg-stone-200 p-3">
        {status === "delivered"
          ? `We hope you enjoyed your donuts, ${customer}. Keep an eye out for your 😍`
          : `Your order will be delivered soon, ${customer}. Keep an eye out for your 🍩`}

        <p className="sm:text-lg text-sm">
          Order Date: <span className="font-semibold">{orderDate}</span>
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-y-2">
        {cart.map((item) => (
          <OrderItem
            key={item.donutId}
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((donut) => donut.id === item.donutId)
                ?.ingredients
            }
          />
        ))}
      </ul>

      <div className="space-y-2 sm:text-lg text-sm bg-stone-200 p-3">
        <p>
          Name: <span className="font-semibold"> {customer}</span>
        </p>
        <p>
          Phone:
          <span className="font-semibold"> {phone}</span>
        </p>
        <p>
          Address:
          <span className="font-semibold"> {address}</span>
        </p>

        {position && (
          <p>
            Position on:{" "}
            <a
              href={positionOnMap}
              target="_blank"
              className="underline text-secondary-900 hover:text-secondary-700">
              Google map
            </a>
          </p>
        )}
      </div>

      <div className="space-y-2 sm:text-lg text-sm bg-stone-200 p-3">
        <p>Price donuts: {formatCurrency(orderPrice)}</p>
        <p>Delivery price: {formatCurrency(deliveryPrice)}</p>

        <p className="font-bold sm:text-xl text-base">
          To pay on delivery: {formatCurrency(orderPrice + deliveryPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;

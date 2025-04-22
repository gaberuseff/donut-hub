import {Form, redirect, useActionData, useNavigation} from "react-router-dom";
import {createOrder, getStaticVariable} from "../../services/apiRestaurant";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, getCart} from "../cart/cartSlice";
import {fetchAddress} from "../user/userSlice";
import store from "../../store";

import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import LinkButton from "../../ui/LinkButton";
import {deleteUserFromLocalStorage} from "../../services/userLocalStorage";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const staticData = await getStaticVariable();
const deliveryPrice = staticData[0].deliveryPrice;

function CreateOrder() {
  const dispatch = useDispatch();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const naviagation = useNavigation();
  const isSubmitting = naviagation.state === "submitting";

  const formError = useActionData();

  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  const donutsPrice = cart
    .map((item) => item.totalPrice)
    .reduce((a, b) => a + b, 0);

  const totalPrice = donutsPrice + deliveryPrice;

  return (
    <div className="px-4 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="my-8 sm:text-xl text-base font-semibold">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="md:space-y-4 space-y-2">
        <div className="sm:flex sm:flex-row flex-col gap-2 items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow w-full sm:w-auto"
          />
        </div>

        <div className="sm:flex sm:flex-row flex-col gap-2 items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow ">
            <input type="tel" name="phone" required className="input w-full" />
            {formError?.phone && (
              <p className="text-sm mt-2 ml-2 bg-red-200 text-red-800 p-2 rounded-md">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="sm:flex sm:flex-row flex-col gap-2 items-center">
          <label className="sm:basis-40">Email</label>
          <div className="grow">
            <input
              type="email"
              name="email"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="sm:flex sm:flex-row flex-col gap-2 items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input w-full"
            />
            {addressStatus === "error" && (
              <p className="text-sm mt-2 ml-2 bg-red-200 text-red-800 p-2 rounded-md">
                {addressError}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <span className="absolute right-[2px] sm:top-[3px] top-[27px] z-80">
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}>
                Get Position
              </Button>
            </span>
          )}
        </div>

        <div
          className="space-y-2 text-secondary-900 sm:text-lg text-md border-y
        border-stone-300 py-2 sm:p-4 flex justify-between items-center">
          <div className="space-y-2">
            <p>
              Order price: <strong>{donutsPrice}</strong>
            </p>
            <p>
              Delivery: <strong>{deliveryPrice}</strong>
            </p>
            <p>
              total Amount: <strong>{totalPrice}</strong>
            </p>
          </div>

          <Button disabled={isSubmitting || isLoadingAddress} type="small">
            {isSubmitting ? "Placing order..." : "Order Now"}
          </Button>
        </div>

        <div>
          <input
            type="hidden"
            name="orderDate"
            value={new Date().toLocaleString()}
          />
          <input type="hidden" name="orderPrice" value={donutsPrice} />
          <input type="hidden" name="deliveryPrice" value={deliveryPrice} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${(position.latitude, position.longitude)}`
                : ""
            }
          />
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    orderDate: new Date().toLocaleString("en-US"),
    cart: JSON.parse(data.cart),
  };

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = "Invalid phone number";

  if (Object.keys(errors).length > 0) return errors;

  // if there are no errors
  const newOrder = await createOrder(order);

  // Not over use
  store.dispatch(clearCart());

  deleteUserFromLocalStorage();

  return redirect(`/order/${newOrder[0].id}`);
}

export default CreateOrder;

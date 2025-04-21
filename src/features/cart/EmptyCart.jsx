import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 sm:text-xl text-base font-semibold text-center">
        Your cart is still empty. Start adding some Donuts 🍩
      </p>
    </div>
  );
}

export default EmptyCart;

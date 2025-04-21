import Button from "./Button";

function ConfirmClearCart({onCloseModal}) {
  return (
    <div
      className="absolute bg-slate-200/20 z-50 backdrop-blur-sm 
        top-0 left-0 w-full h-screen flex items-center justify-center">
      <div className="p-6 text-center bg-white">
        <h2 className="mb-6 text-xl font-semibold">Clear the cart?</h2>
        <div className="flex justify-center gap-2 mt-4">
          <Button type="small">clear cart</Button>
          <Button type="danger" onClick={onCloseModal}>
            cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmClearCart;

import {useRouteError} from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="text-center  h-screen text-secondary-900 flex flex-col  pt-32">
      <h1 className="text-xl font-bold mb-4">Something went wrong 😢</h1>
      <p className="mb-4">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

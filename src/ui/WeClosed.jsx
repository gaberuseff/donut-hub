import {Link} from "react-router-dom";

function WeClosed() {
  return (
    <h3 className="sm:text-2xl text-xl font-bold">
      <p>Sorry ! We are closed 😢</p>
      <Link
        to="/opentimes"
        className="underline underline-offset-4 sm:text-lg text-sm">
        Check our opening hours
      </Link>
    </h3>
  );
}

export default WeClosed;

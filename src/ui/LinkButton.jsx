import {Link, useNavigate} from "react-router-dom";

function LinkButton({children, to}) {
  const navigate = useNavigate();

  const className = `text-md text-blue-600
        hover:underline underline-offset-4`;

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

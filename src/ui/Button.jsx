import {Link} from "react-router-dom";

function Button({children, disabled, onClick, to, type = "primary"}) {
  const base = `bg-secondary-800 text-primary-100 uppercase rounded-full text-sm
            font-semibold  inline-block tracking-wide hover:bg-secondary-700
            transition-all duration-300 focus:outline-none focus:ring
            focus:ring-secondary-600 fous:ring-offset-2 disabled:cursor-wait disabled:opacity-70`;

  const styles = {
    primary: base + " sm:px-6 md:py-4 px-4 py-3",

    secondary: `text-secondary-800 uppercase border border-secondary-800 md:px-6 md:py-4 px-4 py-3 rounded-full text-sm
            font-semibold inline-block tracking-wide hover:bg-secondary-700 hover:text-white
            transition-all duration-30`,

    danger: `text-white uppercase sm:px-6 md:py-3 px-4 py-2 rounded-full text-sm
            font-semibold inline-block tracking-wide hover:bg-red-600 hover:text-white
            transition-all duration-30 bg-red-500 bg-red-700`,

    round:
      base +
      "rounded-full flex items-center justify-center sm:px-4 sm:py-2 px-4 py-2",

    small: base + "sm:px-6 md:py-3 px-4 py-2",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSubmet(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handelSubmet}>
      <input
        className="bg-white sm:w-56 w-40 border border-secondary-800 rounded-full
          px-4 py-2 text-sm placeholder:text-md font-semibold
          placeholder:text-secondary-500 focus:outline-none 
          focus:ring focus:ring-secondary-500 transition-all duration-300 ease-in-out
          sm:focus:w-72 focus:w-44"
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;

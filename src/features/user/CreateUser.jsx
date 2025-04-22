import {useState} from "react";

import Button from "../../ui/Button";
import {useDispatch} from "react-redux";
import {updateName} from "./userSlice";
import {useNavigate} from "react-router-dom";
import {getUserFromLocalStorage} from "../../services/userLocalStorage";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    saveNameInLocalStorage(username);

    getUserFromLocalStorage(username);

    const getUsername = getUserFromLocalStorage();

    const name = getUsername.username;
    getUserFromLocalStorage();

    dispatch(updateName(name));
    naviagte("/menu");
  }

  function saveNameInLocalStorage(username) {
    const user = {username: username, timestamp: Date.now()};
    localStorage.setItem("username", JSON.stringify(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="sm:text-2xl text-md mb-4 text-gray-600 font-semibold">
        tell us your name : 
      </p>

      <input
        className="input md:w-72 w-56 mb-8"
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

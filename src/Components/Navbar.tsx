import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <nav className="flex justify-end items-center p-4 border-b">

      {user ? (
        <button
          onClick={logout}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
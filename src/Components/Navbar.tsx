import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null); 
    navigate("/");
  };

  return (
    <nav className="flex justify-end items-center p-4 border-b">

       {/* <Link to="/" className="text-2xl font-bold">
        FakeStore
      </Link> */}

      <div className="flex gap-3">
        {user ? (
          <button
            onClick={logout}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="bg-black text-white px-4 py-2 rounded">
              Login
            </Link>

            <Link to="/register" className="border border-black px-4 py-2 rounded">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
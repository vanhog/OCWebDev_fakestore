import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { User } from '../pages/type.ts';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(() =>{
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
    

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };
  const username = user?.username || user?.email || "Guest";
  return (
    <nav className="flex justify-end items-center p-4 border-b gap-3">
      {/* Left side: Welcome message */}
      <div className="text-lg font-semibold">
        {user ? `Welcome, ${username} 👋` : 'Welcome 👋'}
      </div>

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

            <Link
              to="/register"
              className="border border-black px-4 py-2 rounded"
            >
              Signup
            </Link>
          </>
        )}
      </div>
      <div className="w-8 h-8 bg-no-repeat bg-center bg-contain bg-[url('/src/Components/cart.svg')]">
        <div
          id="noItems"
          className="flex justify-center items-center bg-rose-300 w-4 h-4 rounded-[50%]"
        >
          0
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

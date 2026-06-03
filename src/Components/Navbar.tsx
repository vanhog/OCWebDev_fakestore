import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem('user');

  const logout = () => {
    localStorage.removeItem('user');

    navigate('/');
  };

  return (
    <nav className="flex justify-end items-center p-4 border-b gap-3">
      {user ? (
        <button
          onClick={logout}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      ) : (
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded">
          Login
        </Link>
      )}
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

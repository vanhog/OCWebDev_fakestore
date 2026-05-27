import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

function Dashboard() {
  const navigate = useNavigate();

  const user: User = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div >
      <h1 className="text-3xl flex justify-center">Dashboard</h1>
      <div className="flex flex-row items-center justify-end bg-gray-100 p-6">
        <p>Welcome {user.username}!</p>

        <button onClick={logout} className="bg-rose-500 text-black flex justify-end px-4 py-2 rounded-md hover:bg-rose-600">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
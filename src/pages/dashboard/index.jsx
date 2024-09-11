import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const index = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://${import.meta.env.VITE_API_URI}/api/user/profile`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setUsername(response.data.username);
        setLoading(false);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "Something went wrong"
        );
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Arahkan pengguna ke halaman login setelah logout
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <NotFound />;

  return (
    <div className="max-w-xl mx-auto opacity-75">
      <h1 className="text-2xl font-bold text-secondary">
        Welcome, {username}!
      </h1>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default index;

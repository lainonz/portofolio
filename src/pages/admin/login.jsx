import { useState } from "react";
import axios from "axios"; // Tambahkan import axios
import { useNavigate } from "react-router-dom"; // Tambahkan import ini

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Buat instance navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://${import.meta.env.VITE_API_URI}/api/auth/login`,
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/0xadmindash");
    } catch (err) {
      setError(
        err.response ? err.response.data.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-secondary opacity-75 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border bg-primary text-secondary opacity-75 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-secondary opacity-75 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border text-secondary opacity-75 bg-primary border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-secondary py-2 rounded hover:bg-[#18191c] hover:bg-opacity-50 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

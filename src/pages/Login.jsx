import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Login", {
        username,
        password,
      });

      //   const res = await axios.post("https://dummyjson.com/auth/login", {
      //     username,
      //     password,
      //   });
      //   console.log({ res }); // the api is not working i this its giving Invalid Credentials error

      localStorage.setItem(
        "token",
        "vnfuhewnqpiheihqervqkehvquherqehrn9emcqerqu8n"
      );
      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <input
          className="border p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="border p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

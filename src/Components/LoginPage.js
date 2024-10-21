import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogInElements from "./LoginElements";
import api from "../utils/api";
import { useAuthContext } from "./Context/Context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        return setMessage("Please try again");
      }
      const response = await api.post("/user/login", { email, password });
      if (response.status === 200) {
        const user = response.data.user;
        setUser(user);
        sessionStorage.setItem("token", response.data.token);
        api.defaults.headers["authorization"] = "Bearer " + response.data.token;
        navigate("/todo", { state: { user } });
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        Login
      </h1>
      <div>{message && <div className="text-red-500 mb-4">{message}</div>}</div>

      <LogInElements
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />

      <p className="text-center text-gray-400 mt-4">
        Don't have an account?
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

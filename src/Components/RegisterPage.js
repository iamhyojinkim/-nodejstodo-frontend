import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterElements from "./RegisterElements";
import api from "../utils/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        return setMessage("Please try again");
      }
      const response = await api.post("/user", { name, email, password });
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setError("이메일 또는 비밀번호를 다시 입력해 주세요");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        Register
      </h1>
      <div className="text-red-500">{error}</div>
      <div className="text-red-500"> {message}</div>
      <RegisterElements
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}

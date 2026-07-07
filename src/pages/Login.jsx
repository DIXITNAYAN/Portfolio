import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      navigate("/admin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <form
        onSubmit={handleLogin}
        className="w-[400px] bg-slate-900 p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl text-white font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full mb-5 p-3 rounded bg-slate-800 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full mb-6 p-3 rounded bg-slate-800 text-white outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
        >
          Login
        </button>
      </form>

    </div>
  );
};

export default Login;
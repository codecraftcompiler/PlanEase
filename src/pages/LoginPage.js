import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import homeimage from '../assets/display.jpg'

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setSuccess("Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
   <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
      }}
    >
      <div className="w-full max-w-lg bg-white text-gray-800 rounded-3xl shadow-xl p-10 border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
            alt="login avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-400 mb-3"
          />
          <h2 className="text-3xl font-bold text-gray-800">Login 🔐</h2>
        </div>

        {error && (
          <div className="bg-red-100 text-red-800 text-sm px-4 py-2 mb-4 rounded-md border border-red-300 text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-800 text-sm px-4 py-2 mb-4 rounded-md border border-green-300 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 hover:bg-blue-800 transition rounded-xl font-semibold text-white"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

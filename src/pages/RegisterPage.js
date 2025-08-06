import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white text-gray-800 rounded-3xl shadow-xl p-10 border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="register avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-400 mb-3"
          />
          <h2 className="text-3xl font-bold text-gray-800">Create Account 📝</h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-800 text-sm px-4 py-3 rounded-md mb-5 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

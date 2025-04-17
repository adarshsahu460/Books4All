import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    type: "donor",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await axios.post("http://localhost:3000/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      localStorage.setItem("user-id", res.data.user.id);
      localStorage.setItem("token", res.data.token); // Store token for authentication
      navigate("/donor/dashboard");
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup failed", error);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <button type="submit">Signup</button>
    </form>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear errors

    try {
      const res = await axios.post("http://localhost:3000/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      localStorage.setItem("user-id", res.data.user.id);
      localStorage.setItem("token", res.data.token); // Store token
      navigate("/donor/dashboard");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login failed", error);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export { Signup, Login };

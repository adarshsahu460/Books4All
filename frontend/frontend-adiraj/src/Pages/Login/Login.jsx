import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaKey, FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import axios from "axios";

const LoginComponent = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!credentials.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!credentials.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/login", credentials);
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("user-id", response.data.user.id);
            toast.success("Logged in successfully!");
            if(response.data.user.type === "CLIENT") navigate("/home");
            else if(response.data.user.type === "DONOR") navigate("/donor");
            else if(response.data.user.type === "NGO") navigate("/ngo_dashboard");
        } catch (error) {
            toast.error("Invalid Credentials!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#fff3e0] flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden"
            >
                <div className="bg-gradient-to-r from-[#f89494] to-[#ffab91] p-6 text-white text-center">
                    <FaUser className="text-4xl mx-auto mb-2" />
                    <h2 className="text-2xl font-bold">Welcome Back</h2>
                    <p className="text-white/90">Sign in to your account</p>
                </div>
                <motion.form onSubmit={handleLogin} className="p-6 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <div className="relative mt-1">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="email" name="email" id="email"
                                value={credentials.email} onChange={handleChange}
                                className={`w-full pl-10 p-3 border rounded-lg focus:ring-[#ff7043] focus:border-[#ff7043] ${errors.email ? 'border-red-500' : 'border-gray-300'}`} 
                                placeholder="your@email.com"
                            />
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1">
                            <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="password" name="password" id="password"
                                value={credentials.password} onChange={handleChange}
                                className={`w-full pl-10 p-3 border rounded-lg focus:ring-[#ff7043] focus:border-[#ff7043] ${errors.password ? 'border-red-500' : 'border-gray-300'}`} 
                                placeholder="Enter your password"
                            />
                        </div>
                        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input id="remember-me" type="checkbox" className="h-4 w-4 text-[#ff7043]" />
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-[#ff7043] hover:underline">Forgot password?</a>
                    </div>
                    <motion.button
                        type="submit" disabled={isLoading}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg text-white bg-red-500 hover:bg-[#d43f3f]"
                    >
                        <FaSignInAlt className="mr-3" /> {isLoading ? "Logging in..." : "Sign In"}
                    </motion.button>
                    <p className="text-sm text-gray-500 text-center">
                        Don't have an account? <a href="/signup" className="text-[#ff7043] hover:underline">Sign up</a>
                    </p>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default LoginComponent;

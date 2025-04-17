import React, { useState, useEffect } from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaSignInAlt, FaUndo, FaGlobe, FaKey } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        address: '',
        email: '',
        password: '',
        latitude: '',
        longitude: '',
        phone: '',
        type: 'DONOR'
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [locationLoading, setLocationLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');
    const navigate = useNavigate()
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            toast.error('Geolocation is not supported by your browser');
            return;
        }

        setLocationLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUser(prev => ({
                    ...prev,
                    latitude: position.coords.latitude.toString(),
                    longitude: position.coords.longitude.toString()
                }));
                setLocationLoading(false);
                toast.success('Location updated successfully');
            },
            (error) => {
                toast.error('Unable to retrieve your location');
                setLocationLoading(false);
            }
        );
    };

    const validate = () => {
        const newErrors = {};

        if (!user.name.trim()) newErrors.name = 'Name is required';
        if (!user.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!user.password) newErrors.password = 'Password is required';
        else if (user.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        if (!user.phone.trim()) newErrors.phone = 'Phone is required';
        if (!user.address.trim()) newErrors.address = 'Address is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/signup", {
                ...user
            });
            toast.success('Account created successfully!');
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("user-id", response.data.user.id);
            console.log(user.type)
            if(user.type === "CLIENT") navigate("/home");
            else if(user.type === "DONOR") navigate("/donor");
            else if(user.type === "NGO") navigate("/ngo-dashboard");
        } catch (error) {
            toast.error('Failed to create account');
            // alert('Invalid Credentials !!!')
            console.error("Signup error:", error.response?.data || error.message);
        }finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setUser({
            name: '',
            address: '',
            email: '',
            password: '',
            latitude: '',
            longitude: '',
            phone: '',
            type: 'DONOR'
        });
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--light-color)] to-[rgba(255,159,28,0.05)] py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] p-6 text-white">
                        <div className="flex items-center">
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                                <FaUser className="text-2xl" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-2xl font-bold">Create Your Account</h2>
                                <p className="text-white/90">Join our book sharing community</p>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('personal')}
                            className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'personal' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Personal Info
                        </button>
                        <button
                            onClick={() => setActiveTab('location')}
                            className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'location' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Location
                        </button>
                    </div>

                    {/* Form Content */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="divide-y divide-gray-200"
                    >
                        {activeTab === 'personal' && (
                            <motion.div variants={itemVariants} className="px-6 py-8">
                                <h3 className="text-xl font-semibold text-[var(--dark-color)] mb-6 flex items-center">
                                    <span className="w-3 h-3 rounded-full bg-[var(--secondary-color)] mr-2"></span>
                                    Personal Information
                                </h3>

                                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-6">
                                    {/* Name */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="name" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Full Name
                                        </label>
                                        <div className="mt-1 flex rounded-lg shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <FaUser className="text-gray-400" />
                                            </span>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={user.name}
                                                onChange={handleChange}
                                                className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm`}
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Email Address
                                        </label>
                                        <div className="mt-1 flex rounded-lg shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <FaEnvelope className="text-gray-400" />
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={user.email}
                                                onChange={handleChange}
                                                className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm`}
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="password" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Password
                                        </label>
                                        <div className="mt-1 flex rounded-lg shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <FaKey className="text-gray-400" />
                                            </span>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={user.password}
                                                onChange={handleChange}
                                                className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm`}
                                                placeholder="Create a password"
                                            />
                                        </div>
                                        {errors.password && (
                                            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Phone Number
                                        </label>
                                        <div className="mt-1 flex rounded-lg shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <FaPhone className="text-gray-400" />
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={user.phone}
                                                onChange={handleChange}
                                                className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg border ${errors.phone ? 'border-red-300' : 'border-gray-300'} focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm`}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* User Type */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="type" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            I am a...
                                        </label>
                                        <div className="mt-1 grid grid-cols-3 gap-3">
                                            {['DONOR', 'CLIENT', 'NGO'].map((type) => (
                                                <div key={type} className="relative">
                                                    <input
                                                        type="radio"
                                                        id={type}
                                                        name="type"
                                                        value={type}
                                                        checked={user.type === type}
                                                        onChange={handleChange}
                                                        className="peer hidden"
                                                    />
                                                    <label
                                                        htmlFor={type}
                                                        className={`block cursor-pointer rounded-lg border bg-white p-4 text-center peer-checked:border-[var(--primary-color)] peer-checked:ring-2 peer-checked:ring-[var(--primary-color)] peer-checked:bg-[rgba(255,107,107,0.05)]`}
                                                    >
                                                        <span className="block text-sm font-medium text-[var(--dark-color)]">
                                                            {type === 'DONOR' ? 'Book Donor' : 
                                                             type === 'CLIENT' ? 'Book Recipient' : 'NGO/Organization'}
                                                        </span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'location' && (
                            <motion.div variants={itemVariants} className="px-6 py-8">
                                <h3 className="text-xl font-semibold text-[var(--dark-color)] mb-6 flex items-center">
                                    <span className="w-3 h-3 rounded-full bg-[var(--tertiary-color)] mr-2"></span>
                                    Location Information
                                </h3>

                                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-6">
                                    {/* Address */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="address" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Full Address
                                        </label>
                                        <div className="mt-1 flex rounded-lg shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                <FaMapMarkerAlt className="text-gray-400" />
                                            </span>
                                            <textarea
                                                name="address"
                                                id="address"
                                                rows={3}
                                                value={user.address}
                                                onChange={handleChange}
                                                className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg border ${errors.address ? 'border-red-300' : 'border-gray-300'} focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm`}
                                                placeholder="Street, City, State, ZIP Code"
                                            />
                                        </div>
                                        {errors.address && (
                                            <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                                        )}
                                    </div>

                                    {/* Location Coordinates */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="latitude" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Latitude
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="latitude"
                                                id="latitude"
                                                value={user.latitude}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm p-3"
                                                placeholder="28.6139"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="longitude" className="block text-sm font-medium text-[var(--dark-color)] mb-1">
                                            Longitude
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="longitude"
                                                id="longitude"
                                                value={user.longitude}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm p-3"
                                                placeholder="77.2090"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <motion.button
                                            type="button"
                                            onClick={getCurrentLocation}
                                            disabled={locationLoading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white 
                                            bg-[#3db8b0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]"
                                        >
                                            {locationLoading ? (
                                                'Detecting Location...'
                                            ) : (
                                                <>
                                                    <FaGlobe className="mr-2" />
                                                    Use My Current Location
                                                </>
                                            )}
                                        </motion.button>
                                        <p className="mt-2 text-sm text-gray-500">
                                            This helps us locate you for book pickups/deliveries.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Form Footer with Signup Button */}
                        <motion.div
                            variants={itemVariants}
                            className="px-6 py-6 bg-gray-50 text-center"
                        >
                            <motion.button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-[#e55a5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
                            >
                                <FaSignInAlt className="mr-3" />
                                {isLoading ? 'Creating Account...' : 'Sign Up Now'}
                            </motion.button>
                            
                            <p className="mt-4 text-sm text-gray-500">
                                Already have an account? 
                                <a href="/login" className="ml-1 text-[var(--primary-color)] hover:underline">
                                    Log in instead
                                </a>
                            </p>
                        </motion.div>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
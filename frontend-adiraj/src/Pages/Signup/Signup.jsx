import { useState } from "react";
import { Button, Label, TextInput, Card, Select } from "flowbite-react";
import { HiMail, HiUser, HiPhone, HiHome, HiLockClosed } from "react-icons/hi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function SignupComponent() {
    const [userType, setUserType] = useState("DONOR");
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/signup", {
                ...formData,
                type: userType,
            });
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("user-id", response.data.user.id);
            navigate("/home");
        } catch (error) {
            alert('Invalid Credentials !!!')
            console.error("Signup error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#fffaf2e7]">
            <div className="flex items-center justify-center w-full">
                <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark mb-4 sm:mb-6">Sign Up</h2>
                    <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSignUp}>
                        {/* Type Selection */}
                        <div>
                            <Label htmlFor="type" className="text-gray-600 text-base sm:text-lg">Type</Label>
                            <Select id="type" required value={userType} onChange={(e) => setUserType(e.target.value)}>
                                <option value="Donor">Donor</option>
                                <option value="School">School</option>
                                <option value="NGO">NGO</option>
                            </Select>
                        </div>

                        {/* Name Field */}
                        <div>
                            <Label htmlFor="name" className="text-gray-600 text-base sm:text-lg">Name</Label>
                            <TextInput id="name" type="text" rightIcon={HiUser} placeholder="Enter name" required value={formData.name} onChange={handleChange} />
                        </div>

                        {/* Address Field */}
                        <div>
                            <Label htmlFor="address" className="text-gray-600 text-base sm:text-lg">Address</Label>
                            <TextInput id="address" type="text" rightIcon={HiHome} placeholder="Enter address" required value={formData.address} onChange={handleChange} />
                        </div>

                        {/* Email Field */}
                        <div>
                            <Label htmlFor="email" className="text-gray-600 text-base sm:text-lg">Email</Label>
                            <TextInput id="email" type="email" rightIcon={HiMail} placeholder="Enter email" required value={formData.email} onChange={handleChange} />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <Label htmlFor="phone" className="text-gray-600 text-base sm:text-lg">Phone</Label>
                            <TextInput id="phone" type="tel" rightIcon={HiPhone} placeholder="Enter phone number" required value={formData.phone} onChange={handleChange} />
                        </div>

                        {/* Password Field */}
                        <div>
                            <Label htmlFor="password" className="text-gray-600 text-base sm:text-lg">Password</Label>
                            <TextInput id="password" type="password" rightIcon={HiLockClosed} placeholder="Enter password" required value={formData.password} onChange={handleChange} />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="bg-[#a96c4e] hover:bg-[#8f5a3c] text-white text-base sm:text-lg py-2 sm:py-3 rounded-lg">
                            Sign Up
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default SignupComponent;

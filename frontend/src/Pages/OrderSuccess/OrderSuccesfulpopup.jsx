import React, { useState } from 'react';
import { FaCheckCircle, FaBook, FaHome, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// Success Popup Component
const OrderSuccessPopup = ({ onClose, onContinue }) => {
  const navigate = useNavigate();
  onClose = () => {
    navigate("/home");
  }
  onContinue = () => {
    navigate("/request");
  }
  return (

    <>
    <Navbar/>
   
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-[var(--dark-color)] mb-4">
          Request Submitted Successfully!
        </h2>
        <p className="text-lg text-[#666] mb-8">
          Your book request has been sent to nearby donors. We'll notify you when books are ready for collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContinue}
            className="bg-[#ff5252] text-white px-6 py-3 rounded-md font-medium transition duration-300 flex-1 sm:flex-none"
          >
            <FaBook className="mr-2 inline" /> Request More Books
          </button>
          <button
            onClick={onClose}
            className="border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--light-color)] px-6 py-3 rounded-md font-medium transition duration-300 flex-1 sm:flex-none"
          >
            <FaHome className="mr-2 inline" /> Return Home
          </button>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default OrderSuccessPopup;
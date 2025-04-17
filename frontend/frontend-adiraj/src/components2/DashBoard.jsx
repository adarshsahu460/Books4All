import React, { useState } from 'react';
import { FaUser, FaUpload, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';  

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState('manual');
  const D_id = localStorage.getItem("user-id");
  
  // Form states
  const [formData1, setFormData1] = useState({
    D_id: D_id || "",
    ISBN: "",
    qty: "",
    age: "",
    category: "",
    book_name: "",
    img_link: "",
  });

  const [formData2, setFormData2] = useState({
    D_id: D_id || "",
    ISBN: "",
    qty: "",
    age: "",
    category: "",
    book_name: "",
    img_link: "",
    selectedFile: null,
  });

  const [isUploading, setIsUploading] = useState(false);
  const [ocrCompleted, setOcrCompleted] = useState(false);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value,
    });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData2({
        ...formData2,
        selectedFile: file,
      });
      setOcrCompleted(false);
    }
  };

  const handleImageUpload = async () => {
    if (!formData2.selectedFile) {
      alert("Please select an image first!");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", formData2.selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5004/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { title, author, category, isbn, img_link } = response.data;
      setFormData2({
        ...formData2,
        book_name: title || "",
        ISBN: isbn || "",
        category: category || "",
        img_link: img_link || "",
      });
      setOcrCompleted(true);
      alert("OCR Completed!!");
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Error fetching book details.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log("Form 1 Data Submitted:", formData1);

    try {
      const response = await fetch("http://localhost:5003/donor-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData1),
      });

      console.log(response);
      const result = await response.json();

      if (response.ok) {
        alert("Form 1 submitted successfully!");
      } else {
        alert(result.message || "Something went wrong with Form 1.");
      }
    } catch (error) {
      console.error("Error submitting Form 1:", error);
      alert("An error occurred while submitting Form 1.");
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log("Form 2 Data Submitted:", formData2);

    if (
      !formData2.D_id ||
      !formData2.ISBN ||
      !formData2.qty ||
      !formData2.age ||
      !formData2.category ||
      !formData2.book_name
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5003/donor-ocr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData2),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form 2 submitted successfully!");
      } else {
        alert(result.message || "Something went wrong with Form 2.");
      }
    } catch (error) {
      console.error("Error submitting Form 2:", error);
      alert("An error occurred while submitting Form 2.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center gap-2 ${
            activeTab === 'manual' 
              ? 'text-indigo-600 border-b-2 border-indigo-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('manual')}
        >
          <FaUser />
          Manual Book Entry
        </button>
        <button
          className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center gap-2 ${
            activeTab === 'ocr' 
              ? 'text-indigo-600 border-b-2 border-indigo-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('ocr')}
        >
          <FaUpload />
          OCR Book Entry
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'manual' ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Manual Book Adding</h2>
            <form onSubmit={handleSubmit1} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User ID
                  </label>
                  <input
                    type="text"
                    name="D_id"
                    value={formData1.D_id}
                    onChange={handleChange1}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ISBN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ISBN"
                    value={formData1.ISBN}
                    onChange={handleChange1}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="qty"
                    value={formData1.qty}
                    onChange={handleChange1}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age Group <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData1.age}
                    onChange={handleChange1}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData1.category}
                    onChange={handleChange1}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Book Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="book_name"
                    value={formData1.book_name}
                    onChange={handleChange1}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                >
                  Submit Book Details
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">OCR</h2>
            <form onSubmit={handleSubmit2} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User ID
                  </label>
                  <input
                    type="text"
                    name="D_id"
                    value={formData2.D_id}
                    onChange={handleChange2}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="qty"
                    value={formData2.qty}
                    onChange={handleChange2}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age Group <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData2.age}
                    onChange={handleChange2}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Book Cover Image <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex-1 cursor-pointer">
                    <div className="flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition">
                      <FaUpload className="text-3xl text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData2.selectedFile
                          ? formData2.selectedFile.name
                          : "Click to select book cover image"}
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </label>
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    disabled={!formData2.selectedFile || isUploading}
                    className={`px-6 py-3 rounded-md font-medium ${
                      !formData2.selectedFile || isUploading
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                    }`}
                  >
                    {isUploading ? "Processing..." : "Extract Details"}
                  </button>
                </div>
              </div>

              {ocrCompleted && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-500 text-xl mr-2" />
                    <h3 className="text-green-700 font-medium">
                      Book details extracted successfully!
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Book Name
                      </label>
                      <input
                        type="text"
                        name="book_name"
                        value={formData2.book_name}
                        onChange={handleChange2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ISBN
                      </label>
                      <input
                        type="text"
                        name="ISBN"
                        value={formData2.ISBN}
                        onChange={handleChange2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={formData2.category}
                        onChange={handleChange2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!ocrCompleted}
                  className={`w-full py-3 px-4 rounded-md font-bold ${
                    !ocrCompleted
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  } transition duration-300`}
                >
                  Submit Book Details
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
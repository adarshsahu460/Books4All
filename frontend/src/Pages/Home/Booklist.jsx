import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiBook,
  FiHeart,
  FiUsers,
} from "react-icons/fi";
import HomeSection from "../../components/HomeSection";
import BookCard from "../../components/BookCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";

function Booklist() {
  const [activeTab, setActiveTab] = useState("donate");
  const [activeFilter, setActiveFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/request/by-name?name=a`
        );
        
        const booksData = response.data;
        setBooks(booksData);

        const uniqueCategories = [
          ...new Set(booksData.map((book) => book.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks =
    activeFilter === "all"
      ? books
      : books.filter((book) => book.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HomeSection />
      <main className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiBook className="text-blue-600 text-2xl" />
            </div>
            <div>
              <p className="text-gray-500">Total Books Shared</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FiHeart className="text-green-600 text-2xl" />
            </div>
            <div>
              <p className="text-gray-500">Active Donors</p>
              <p className="text-2xl font-bold">327</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <FiUsers className="text-purple-600 text-2xl" />
            </div>
            <div>
              <p className="text-gray-500">Students Benefited</p>
              <p className="text-2xl font-bold">892</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Books by Category</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All
            </button>
            {categories && categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Books Display */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks && filteredBooks.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                mode={activeTab} 
                onAction={() => {
                  // Show pop-up and display book details
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Booklist;

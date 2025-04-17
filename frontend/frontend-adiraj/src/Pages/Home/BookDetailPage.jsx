import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FiBook, FiUser, FiHeart, FiShare2, FiArrowLeft, FiCheck, FiStar } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'


const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count,setCount] = useState(0);
  const navigateto = useNavigate();

  const handleBuyNow = async () => {
    
    console.log(localStorage.getItem('user-id'),)
    const response = await axios.post('http://localhost:5001/api/client/books',{
      clientId : localStorage.getItem('user-id'),
      books : [{
        isbn : id,
        qty : count
      }]
    })
    navigateto('/cart');
    console.log(response.data)
  }
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/request/by-isbn?isbn=${id}`);
        const bookData = response.data;

        setBook({
          title: bookData.title,
          author: bookData.author || "Unknown",
          publisher: bookData.publisher || "Unknown Publisher",
          description: bookData.description || "No description available",
          isbn: bookData.isbn,
          pageCount: bookData.pageCount || "N/A",
          categories: bookData.categories ? bookData.categories.join(', ') : "N/A",
          language: bookData.language || "N/A",
          image: bookData.image || "https://via.placeholder.com/150",
          availability: "Available",
          requestCount: Math.floor(Math.random() * 10) + 1, // Random request count for demo
        });        
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading book details...</div>;
  }

  if (!book) {
    return <div className="text-center py-10">Book not found</div>;
  }
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => window.history.back()} className="flex items-center text-blue-600">
            <FiArrowLeft className="mr-2" />
            Back to Books
          </button>
          <h1 className="text-xl font-bold text-gray-800">Book Details</h1>
          <div className="w-8"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Book Image Section */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex justify-center">
              <img 
                src={book.image} 
                alt={book.title} 
                className="h-96 object-contain shadow-lg border border-gray-100 transform hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center transition" onClick={handleBuyNow}>
                <FiHeart className="mr-2" />
                Order now
              </button>
              <input type = "text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"  
               placeholder='Enter Quantity' onChange={(e)=>{
                setCount(e.target.value)
              }}>
              </input>
            </div>
          </div>

          {/* Book Details Section */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Book Header */}
              <div className="p-6 border-b border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

                <div className="flex items-center mt-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`text-gray-300 ${i < 4 ? 'text-yellow-400' : ''}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{book.requestCount} requests</span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
                <p className="text-gray-700 mb-6">{book.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Publisher</h3>
                    <p className="font-medium">{book.publisher}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Page Count</h3>
                    <p className="font-medium">{book.pageCount}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Categories</h3>
                    <p className="font-medium">{book.categories}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Language</h3>
                    <p className="font-medium">{book.language}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Interested in this book?</h3>
                  <p>Request it now and help continue the cycle of sharing!</p>
                </div>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold shadow-md transition whitespace-nowrap">
                  Request This Book
                </button>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mt-6 bg-yellow-50 border border-yellow-100 rounded-xl p-6">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                <FiCheck className="mr-2 text-yellow-600" />
                Safe Sharing Tips
              </h3>
              <ul className="text-yellow-700 text-sm list-disc pl-5 space-y-1">
                <li>Always meet in public school areas during school hours</li>
                <li>Verify book condition before accepting</li>
                <li>Report any issues to school administration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default BookDetailPage;

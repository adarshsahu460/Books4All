import { FiBook, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleViewBook = () => {
    navigate(`/book-details/${book.isbn}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
      <div className="p-4 h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={book.image} 
          alt={book.title} 
          className="h-full object-contain"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{book.title}</h3>
        
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FiUser className="mr-1" />
          <span className="line-clamp-1">{book.author}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {book.category}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
            {book.language.toUpperCase()}
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-3">
          <span className="font-semibold">Pages:</span> {book.pageCount}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">ISBN:</span> {book.isbn}
        </p>

        <div className="mt-auto">
          <button 
            className="w-full py-2 rounded-md font-semibold mt-3 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleViewBook}
          >
            View Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

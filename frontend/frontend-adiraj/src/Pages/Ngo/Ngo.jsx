import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import axios from 'axios';

const TransactionTable = () => {
    const [transactions,setTransactions] = useState([
        {
          id: 1,
          donor: { id: 101, name: 'John Smith' },
          client: { id: 201, name: 'Jane Doe' },
          ngo: { id: 301, name: 'Helping Hands NGO' },
          qty: 5,
          status: 'pending',
          date: '2023-05-15'
        },
        {
          id: 2,
          donor: { id: 102, name: 'Michael Johnson' },
          client: { id: 202, name: 'Sarah Williams' },
          ngo: { id: 302, name: 'Community Aid' },
          qty: 3,
          status: 'completed',
          date: '2023-05-14'
        },
        {
          id: 3,
          donor: { id: 103, name: 'Emily Davis' },
          client: { id: 203, name: 'Robert Brown' },
          ngo: { id: 303, name: 'Food for All' },
          qty: 7,
          status: 'in_progress',
          date: '2023-05-13'
        },
        {
          id: 4,
          donor: { id: 104, name: 'David Wilson' },
          client: { id: 204, name: 'Lisa Taylor' },
          ngo: { id: 304, name: 'Hope Foundation' },
          qty: 2,
          status: 'completed',
          date: '2023-05-12'
        },
        {
          id: 5,
          donor: { id: 105, name: 'Jessica Martinez' },
          client: { id: 205, name: 'Thomas Anderson' },
          ngo: { id: 305, name: 'Care Network' },
          qty: 10,
          status: 'pending',
          date: '2023-05-11'
        },
        {
          id: 6,
          donor: { id: 105, name: 'Jessica Martinez' },
          client: { id: 205, name: 'Thomas Anderson' },
          ngo: { id: 305, name: 'Care Network' },
          qty: 10,
          status: 'pending',
          date: '2023-05-11'
        }
    ]);

    useEffect(()=>{
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:5002/ngo/requests');
                const data = await response.json();
                setTransactions(data.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();   
    },[])
      
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 5;

    const getStatusColor = (status) => {
        const statusMap = {
            pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
            completed: 'bg-green-50 text-green-700 border-green-200',
            in_progress: 'bg-blue-50 text-blue-700 border-blue-200',
            default: 'bg-gray-50 text-gray-700 border-gray-200',
        };

        return statusMap[status.toLowerCase()] || statusMap.default;
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Filter transactions based on status and search query
    // Ensure transactions is an array, default to empty array if undefined/null
const filteredTransactions = Array.isArray(transactions) ? transactions : [];

const filteredResults = filteredTransactions.filter(transaction => {
    const matchesStatus = statusFilter === 'all' || 
        transaction.status.toLowerCase() === statusFilter.toLowerCase() ||
        (statusFilter === 'in progress' && transaction.status === 'in_progress');

    const matchesSearch = searchQuery === '' || 
        transaction.donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.id.toString().includes(searchQuery);

    return matchesStatus && matchesSearch;
});

// Pagination logic
const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentTransactions = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

// Event handlers
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};

const handleApprove = async (transactionId) => {
    console.log(`Approving transaction ${transactionId}`);
    // Add your approval logic here
    const response = await axios.patch('http://localhost:5002/ngo/request',{
        NGO_id : localStorage.getItem('user-id'),
        id : transactionId,
    });
};

const handleDeny = (transactionId) => {
    console.log(`Denying transaction ${transactionId}`);
    // Add your denial logic here
};

const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
};

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Select deliveries</h2>
                    </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 bg-white flex justify-between items-center">
                        <div className="relative w-64">

                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <label htmlFor="status-filter" className="mr-2 text-sm font-medium text-gray-700">Status:</label>
                                <select
                                    id="status-filter"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    value={statusFilter}
                                    onChange={handleStatusFilterChange}
                                >
                                    <option value="all">All</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="in progress">In Progress</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Donor
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentTransactions.length > 0 ? (
                                    currentTransactions.map((transaction) => (
                                        <tr key={transaction.id} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #{transaction.id.toString().padStart(4, '0')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                                        <span className="text-indigo-600 font-medium">{transaction.donor.name.charAt(0)}</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{transaction.donor.name}</div>
                                                        <div className="text-sm text-gray-500">ID: {transaction.donor.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                                        <span className="text-green-600 font-medium">{transaction.client.name.charAt(0)}</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{transaction.client.name}</div>
                                                        <div className="text-sm text-gray-500">ID: {transaction.client.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                    {transaction.qty} items
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(transaction.date)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(transaction.status)}`}>
                                                    {transaction.status.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button 
                                                    onClick={() => handleApprove(transaction.id)}
                                                    className="text-green-600 hover:text-green-900 mr-3 p-1 rounded-full hover:bg-green-50"
                                                    title="Approve"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <button 
                                                    onClick={() => handleDeny(transaction.id)}
                                                    className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                                                    title="Deny"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                                            No transactions found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {filteredTransactions.length > 0 && (
                        <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex-1 flex justify-between items-center sm:hidden">
                                <button 
                                    onClick={() => handlePageChange(currentPage - 1)} 
                                    disabled={currentPage === 1}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                                        currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    Previous
                                </button>
                                <button 
                                    onClick={() => handlePageChange(currentPage + 1)} 
                                    disabled={currentPage === totalPages}
                                    className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                                        currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                                        <span className="font-medium">{Math.min(indexOfLastItem, filteredTransactions.length)}</span> of{' '}
                                        <span className="font-medium">{filteredTransactions.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium ${
                                                currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-50'
                                            }`}
                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => handlePageChange(page)}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                    page === currentPage
                                                        ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium ${
                                                currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-50'
                                            }`}
                                        >
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionTable;
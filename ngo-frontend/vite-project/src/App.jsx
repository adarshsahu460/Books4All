import { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch transactions from backend
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/transactions");
                setTransactions(response.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, []);

    // Handle selection
    const handleSelect = (id) => {
        setSelectedTransaction(id);
    };

    // Send selected transaction to backend
    const confirmTransaction = async () => {
        if (!selectedTransaction) {
            alert("Please select a transaction to confirm.");
            return;
        }
        setLoading(true);
        try {
            await axios.get("http://localhost:5000/ngo/getallrequests/", {
                transactionIds: [selectedTransaction], // Sending selected ID as an array
            });

            alert("Transaction confirmed successfully!");
            setTransactions(transactions.filter(t => t.id !== selectedTransaction)); // Remove confirmed transaction
            setSelectedTransaction(null);
        } catch (error) {
            console.error("Error confirming transaction:", error);
            alert("Failed to confirm transaction.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Pending Transactions</h2>

            {transactions.length === 0 ? (
                <p className="text-gray-500">No pending transactions available.</p>
            ) : (
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Select</th>
                            <th className="p-2 border">Donor</th>
                            <th className="p-2 border">Client</th>
                            <th className="p-2 border">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border">
                                <td className="p-2 border text-center">
                                    <input
                                        type="radio"
                                        name="transaction"
                                        value={transaction.id}
                                        checked={selectedTransaction === transaction.id}
                                        onChange={() => handleSelect(transaction.id)}
                                        className="h-4 w-4 text-blue-600"
                                    />
                                </td>
                                <td className="p-2 border">{transaction.donor?.name || "Unknown"}</td>
                                <td className="p-2 border">{transaction.client?.name || "Unknown"}</td>
                                <td className="p-2 border">{transaction.qty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button
                onClick={confirmTransaction}
                disabled={!selectedTransaction || loading}
                className={`mt-4 px-6 py-2 rounded-lg text-white font-semibold transition ${
                    selectedTransaction
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                {loading ? "Processing..." : "Confirm Transaction"}
            </button>
        </div>
    );
};

function App() {
  return (
      <div className="bg-gray-50 min-h-screen flex justify-center items-center p-6">
          <Transactions/>
      </div>
  );
}

export default App;
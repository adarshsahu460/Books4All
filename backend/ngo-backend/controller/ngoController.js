const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllRequests = async function (req, res) {
    try {
      const transactions = await prisma.transactionTable.findMany({
        where: {
          status: {
            not: "OTW",
          },
        },
        include: {
          donor: { select: { id: true, name: true } },
          client: { select: { id: true, name: true } },
          ngo: { select: { id: true, name: true } },
        },
      });
      
      const formattedTransactions = transactions.map((transaction) => ({
        id: transaction.id,
        donor: { id: transaction.donor.id, name: transaction.donor.name },
        client: { id: transaction.client.id, name: transaction.client.name },
        ngo: { id: transaction.ngo.id, name: transaction.ngo.name },
        qty: transaction.qty,
        status: transaction.status,
        date : '01/04/2004'
      }));
      
      
      res.status(200).json({
        status: "success",
        results: formattedTransactions.length,
        data: formattedTransactions,
      });
    } catch (error) {
      console.error("Error fetching requests:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

exports.changeStatus = async function (req, res) {
  const { id } = req.body;
  const { NGO_id } = req.body;

  console.log(id);

  const existingTransaction = await prisma.transactionTable.findUnique({ // ✅ Correct model name
    where: { id: parseInt(id) },
  }); 

  if (!existingTransaction) {
    return res.status(404).json({ error: "Transaction not found" });
  }

  const updatedTransaction = await prisma.transactionTable.update({ // ✅ Correct model name
    where: { id: parseInt(id) },
    data: {
      status: "OTW",
      NGO_id: parseInt(NGO_id), 
    },
  });

  res.status(200).json({
    status: "success",
    data: updatedTransaction,
  });
};
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

exports.getAllRequests = async function (req, res) {
    try {
      const transactions = await prisma.transactionTable.findMany({
        where: {
          status: {
            not: "OTW",
          },
        },
      });
  
      res.status(200).json({
        status: "success",
        results: transactions.length,
        data: transactions,
      });
    } catch (error) {
      console.error("Error fetching requests:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

exports.changeStatus = async function (req, res) {
  const { id } = req.params;
  const { NGO_id } = req.body;

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
      NGO_id: NGO_id, 
    },
  });

  res.status(200).json({
    status: "success",
    data: updatedTransaction,
  });
};

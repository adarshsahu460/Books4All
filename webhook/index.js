const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function matchBooks() {
  try {
    const clientBooks = await prisma.clientBook.findMany({
      include: { client: true }, 
    });

    for (const clientBook of clientBooks) {
      const donorBook = await prisma.donorBook.findFirst({
        where: { ISBN: clientBook.ISBN },
        include: { donor: true }, 
      });

      if (donorBook) {
        const matchedQty = Math.min(clientBook.qty, donorBook.qty);

        console.log(
          `Matched ${matchedQty} books for ISBN ${clientBook.ISBN}`
        );
        await prisma.transaction.create({
          data: {
            donorBookId: donorBook.id,
            clientBookId: clientBook.id,
            NGO_id: 1, 
            qty: matchedQty,
            status: "OTW",
          },
        });

        await prisma.donorBook.update({
          where: { id: donorBook.id },
          data: { qty: donorBook.qty - matchedQty },
        });

        await prisma.clientBook.update({
          where: { id: clientBook.id },
          data: { qty: clientBook.qty - matchedQty },
        });

        if (donorBook.qty - matchedQty === 0) {
          await prisma.donorBook.delete({ where: { id: donorBook.id } });
        }
        if (clientBook.qty - matchedQty === 0) {
          await prisma.clientBook.delete({ where: { id: clientBook.id } });
        }
      }
    }

  } catch (error) {
    console.error("❌ Error in book matching:", error);
  } finally {
    await prisma.$disconnect();
  }
}

function checkTimeAndRunJob() {
  setInterval(async () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (hours === 0 && minutes === 0) {
      await matchBooks();
    }
  }, 60000); 
}

checkTimeAndRunJob();
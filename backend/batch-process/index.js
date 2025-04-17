const { PrismaClient } = require('@prisma/client');
const { default: axios } = require('axios');

const prisma = new PrismaClient();

const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    
    const R = 6371; // Radius of Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) ** 2 + 
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

async function processTransactions() {
    console.log("Starting batch transaction processing...");

    const clientBooks = await prisma.clientBook.findMany({
        include: { client: true } // Fetch client location
    });

    for (const clientBook of clientBooks) {
        const { latitude: clientLat, longitude: clientLon } = clientBook.client;
        let donorBooks = await prisma.donorBook.findMany({
            where: { ISBN: clientBook.ISBN },
            include: { donor: true } // Fetch donor location
        });

        // Sort donors based on distance from client
        donorBooks = donorBooks
            .map(donor => ({
                ...donor,
                distance: haversineDistance(clientLat, clientLon, donor.donor.latitude, donor.donor.longitude)
            }))
            .sort((a, b) => a.distance - b.distance); // Sort ascending

        for (const donorBook of donorBooks) {
            if (clientBook.qty > 0 && donorBook.qty > 0) {
                const transferQty = Math.min(clientBook.qty, donorBook.qty);

                const ngo = await prisma.userInfo.findFirst({ where: { type: "ngo" } });

                if (!ngo) {
                    console.error("No NGO found. Skipping transaction.");
                    continue;
                }

                await prisma.transactionTable.create({
                    data: {
                        donor_id: donorBook.D_id,
                        client_id: clientBook.C_id,
                        NGO_id: ngo.id,
                        qty: transferQty,
                        status: "pending"
                    }
                });

                console.log(`Transaction created: ${transferQty} books transferred from donor ${donorBook.D_id} to client ${clientBook.C_id}`);
                const client = await prisma.userInfo.findUnique({ where: { id: clientBook.C_id } });
                const donor = await prisma.userInfo.findUnique({ where: { id: donorBook.D_id } });
                axios.post("http://10.6.79.38:3000/send-messages",
                    {
                        "numbers": ["91"+client.phone, "91"+donor.phone],
                        "emails": [client.email, donor.email],
                        "messages":[`Hello ${client.name}, ${donor.name}, your transaction of ${transferQty} books is pending.`,
                            `Hello ${client.name}, ${donor.name}, your transaction of ${transferQty} books is pending.`]
    ,
                        "subject": "Test Email"
                    }
                )
                await prisma.donorBook.update({
                    where: { id: donorBook.id },
                    data: { qty: donorBook.qty - transferQty }
                });

                await prisma.clientBook.update({
                    where: { id: clientBook.id },
                    data: { qty: clientBook.qty - transferQty }
                });

                if (donorBook.qty - transferQty === 0) {
                    await prisma.donorBook.delete({ where: { id: donorBook.id } });
                    console.log(`Deleted donor book: ${donorBook.id}`);
                }

                if (clientBook.qty - transferQty === 0) {
                    await prisma.clientBook.delete({ where: { id: clientBook.id } });
                    console.log(`Deleted client book: ${clientBook.id}`);
                }
            }
        }
    }

    console.log("Batch processing completed.");
}


processTransactions()
    .catch((e) => {
        console.error("Error processing transactions:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

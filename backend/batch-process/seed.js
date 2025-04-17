const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log("🔄 Resetting database...");

    // Delete existing data
    await prisma.transactionTable.deleteMany();
    await prisma.donorBook.deleteMany();
    await prisma.clientBook.deleteMany();
    await prisma.userInfo.deleteMany();

    console.log("✅ Database cleared.");

    console.log("🚀 Seeding database...");

    // 1️⃣ Create sample users
    const donor = await prisma.userInfo.create({
        data: {
            name: "John Donor",
            address: "123 Donor St",
            password: "securepassword",
            email: "adarsh.sahu@walchandsangli.ac.in",
            phone: "9867582694",
            type: "donor",
            latitude: 19.0760,
            longitude: 72.8777
        }
    });

    const client = await prisma.userInfo.create({
        data: {
            name: "Alice Client",
            address: "456 Client Rd",
            password: "securepassword",
            email: "katkarvivek0@gmail.com",
            phone: "9356907874",
            type: "client",
            latitude: 28.7041,
            longitude: 77.1025
        }
    });

    const ngo = await prisma.userInfo.create({
        data: {
            name: "Helping Hands NGO",
            address: "789 NGO Blvd",
            password: "securepassword",
            email: "ngo@example.com",
            phone: "1112223333",
            type: "ngo",
            latitude: 22.5726,
            longitude: 88.3639
        }
    });

    console.log("✅ Users seeded.");

    // 2️⃣ Create sample donor books
    const donorBook = await prisma.donorBook.create({
        data: {
            D_id: donor.id,
            ISBN: "978-3-16-148410-0",
            qty: 5,
            age: 1,
            category: "Education",
            book_name: "Introduction to Algorithms",
            img_link: "https://example.com/book1.jpg"
        }
    });

    console.log("✅ Donor books seeded.");

    // 3️⃣ Create sample client book requests
    const clientBook = await prisma.clientBook.create({
        data: {
            C_id: client.id,
            ISBN: "978-3-16-148410-0",
            qty: 3
        }
    });

    console.log("✅ Client book requests seeded.");

    // 4️⃣ Create a sample transaction if valid donor and client exist
    if (donor && client && ngo) {
        await prisma.transactionTable.create({
            data: {
                donor_id: donor.id,
                client_id: client.id,
                NGO_id: ngo.id,
                qty: 3,
                status: "pending"
            }
        });

        console.log("✅ Transactions seeded.");
    } else {
        console.warn("⚠️ Skipping transaction: Donor, Client, or NGO missing.");
    }

    console.log("🎉 Seeding completed successfully.");
}

// Run the seeding process
main()
    .catch((e) => {
        console.error("❌ Error seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

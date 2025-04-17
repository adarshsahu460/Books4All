const express = require("express");
const cors = require("cors");
require("dotenv").config();
const makeWASocket = require("@whiskeysockets/baileys").default;
const { useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const qrcode = require("qrcode-terminal");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors({ origin: "*" }));
app.use(express.json());

let sock;

async function initializeWAConnection() {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info_baileys");
    
    sock = makeWASocket({
        printQRInTerminal: true, 
        auth: state,
    });

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log("Scan this QR code to authenticate:");
            qrcode.generate(qr, { small: true });  
        }

        if (connection === "close") {
            const shouldReconnect =
                lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log("Connection closed:", lastDisconnect?.error);
            if (shouldReconnect) initializeWAConnection();
        } else if (connection === "open") {
            console.log("✅ WhatsApp Connected!");
        }
    });

    sock.ev.on("creds.update", saveCreds);
}

initializeWAConnection();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
});

async function sendEmails(emailList, subject, message) {
    console.log("Email Service begins");
    for (const email of emailList) {
        try {
            let info = await transporter.sendMail({
                from: `"Your Service" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: subject,
                text: message,
            });
            console.log(`Email sent to ${email}: ${info.messageId}`);
        } catch (error) {
            console.error(`Failed to send email to ${email}:`, error);
        }
    }
}

app.post("/send-messages", async (req, res) => {
    const { numbers, emails, message, subject } = req.body;

    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid numbers list" });
    }

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
        return res.status(400).json({ error: "Invalid email list" });
    }

    if (!message) {
        return res.status(400).json({ error: "Message cannot be empty" });
    }

    if (!sock || !sock.user) {
        return res.status(500).json({ error: "WhatsApp is not connected yet. Try again later." });
    }

    try {
        for (const number of numbers) {
            const whatsappNumber = `${number}@s.whatsapp.net`;
            try {
                const response = await sock.sendMessage(whatsappNumber, { text: message });
                console.log(`Message sent to: ${number}`, response);
            } catch (error) {
                console.error(`Failed to send message to ${number}:`, error);
            }
        }

        await sendEmails(emails, subject || "Notification", message);

        res.status(200).json({ success: true, message: "Messages and emails sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send messages and emails", details: error.message });
    }
});

app.get("/test", (req, res) => {
    res.status(200).send("Server is running well");
});

app.listen(PORT, () => {
    console.log(`🚀 Your service is running on port ${PORT}`);
});

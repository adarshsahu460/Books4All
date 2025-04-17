const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 2711;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/test", (req, res) => {
    res.status(200).send("Server is running well");
});

app.post("/geocode", async (req, res) => {
    const address = req.body.address;
    if (!address) {
        return res.status(400).json({ message: "Address is required" });
    }
    
    try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const response = await axios.get(url);
        if (response.data.length === 0) {
            return res.status(404).json({ message: "Location not found" });
        }
        // res.status(200).json(response.data[0]);
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        res.status(200).json({ lat, lon });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while converting location" });
    }
});

app.post("/reverse-geocode", async (req, res) => {

    const { lat, lon } = req.body;
    if (!lat || !lon) {
        return res.status(400).json({ message: "Latitude and Longitude are required" });
    }
    
    try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
        const response = await axios.get(url);
        const lat = response.data.lat;
        const lon = response.data.lon;
        res.status(200).json({ lat, lon });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while fetching location details" });
    }
});

app.post("/routes", (req, res) => {
    const { origin, destination } = req.body;

    if (!origin || !destination || typeof origin.lat !== "number" || typeof origin.lng !== "number" || typeof destination.lat !== "number" || typeof destination.lng !== "number") {
        return res.status(400).json({ message: "Invalid or missing coordinates. Ensure lat/lng are numbers." });
    }
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;

    res.status(200).json({ url: googleMapsUrl });
});


app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`);
});
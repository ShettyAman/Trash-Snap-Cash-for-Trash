const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

// Validate API Key exists
if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: GEMINI_API_KEY is missing in your .env file!");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/scan', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Use 1.5 for stability
        const prompt = `Analyze image for recyclables. Output ONLY a JSON array. 
        Format: [{"item": "Name", "category": "plastic", "confidence": 95, "box_2d": [ymin, xmin, ymax, xmax]}]`;

        const result = await model.generateContent([
            prompt,
            { inlineData: { data: req.body.base64, mimeType: req.body.mime } }
        ]);

        let text = result.response.text().replace(/```json|```/g, "").trim();
        let data = JSON.parse(text);
        res.json(Array.isArray(data) ? data : [data]); 
    } catch (error) {
        console.error("Scanning Error:", error.message);
        res.status(500).json({ error: "Check console for details" });
    }
});

app.listen(5000, () => console.log('✅ SERVER LIVE: http://localhost:5000'));
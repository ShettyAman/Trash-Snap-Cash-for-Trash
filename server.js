const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));

// Initialize Gemini 2.5 Flash Engine
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/scan', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const prompt = `Analyze images. Detect recyclable items.
        CRITICAL INSTRUCTION: Group identical items!
        - If multiple similar items exist (e.g. pile of cups), draw ONE box around the group.
        - Name it collectively (e.g. "Stack of Cups").
        
        OUTPUT ONLY A JSON ARRAY. 
        Example: [{"item": "Name", "category": "plastic", "confidence": 90, "box_2d": [0,0,1000,1000]}]
        Categories: plastic, paper, metal, e-waste, general.`;

        const result = await model.generateContent([
            prompt, 
            { inlineData: { data: req.body.base64, mimeType: req.body.mime } }
        ]);

        let jsonText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        let detectedItems = JSON.parse(jsonText);
        
        // Safety check to ensure valid array
        res.json(Array.isArray(detectedItems) ? detectedItems : [detectedItems]);

    } catch (error) {
        console.error("Critical Gemini 2.5 Error:", error.message);
        res.status(500).json([]); 
    }
});

app.listen(5000, () => console.log('✅ BACKEND LIVE: http://localhost:5000'));
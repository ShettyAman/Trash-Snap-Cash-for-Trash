# Trash-Snap-Cash-for-Trash

Overview
Trash Snap is an intelligent waste management dashboard designed to bridge the gap between household waste segregation and organized recycling markets. The system automates real-time waste identification into categories like Plastic, Paper, Metal, and E-Waste using the Google Gemini API. It further connects users to a hyperlocal marketplace with real-time pricing comparisons and transport routing.

Key Features
Neural Object Detection: Utilizes Gemini 2.5 Flash for high-accuracy identification of multiple waste items simultaneously.
Smart Grouping Logic: Semantically clusters identical items (e.g., "Stack of Cups") to reduce user interface clutter.
Interactive Visual Monitor: Renders responsive CSS bounding boxes over recognized objects for visual verification.
Geolocation & Routing: Plots user location via Leaflet.js and provides travel estimates for walking, biking, or driving to nearby centers.
Comparative Marketplace: Displays live buying rates from verified dealers like Scrapzone and Zolopik, with direct WhatsApp contact buttons.

Tech Stack
Frontend: HTML5, Vanilla JavaScript (ES6+), and Tailwind CSS.
Backend: Node.js with Express.js (for secure API handling).
AI Engine: Google Gemini 2.5 Flash API.
Mapping: Leaflet.js and OpenStreetMap.

Setup Instructions
Install Node.js: Ensure you have Node.js installed on your system.
Install Dependencies: Open your terminal in the project folder and run:
Bash
npm install express @google/generative-ai dotenv cors

Configure API Key: Create a .env file in the root directory and add your key:
Plaintext
GEMINI_API_KEY=your_actual_api_key_here

Start the Backend: Run the server to handle neural scan requests:
Bash
node server.js

Launch Dashboard: Open index.html using a Live Server (highly recommended for GPS functionality).

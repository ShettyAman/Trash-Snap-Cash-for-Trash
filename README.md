# Trash-Snap-Cash-for-Trash
An AI-driven waste recovery system; marketplace platform for smart cities. Leverages Google Gemini for zero-shot classification and Leaflet.js for hyperlocal recycling center routing.
Trash Snap: AI-Driven Waste Recovery & Marketplace ♻️

Trash Snap is a next-generation waste management solution designed for smart cities. It bridges the gap between household waste segregation and the informal recycling economy (Kabadiwalas) using cutting-edge Multimodal AI.

🚀 Key Features

Zero-Shot AI Classification: Instantly identify waste materials (Plastic, Paper, E-waste, Metal) using the Google Gemini 2.5 Flash model.

Visual Analysis Monitor: Real-time bounding box overlays on uploaded images for precise object localization.

Smart Grouping: Intelligent prompt engineering that clusters identical items (e.g., "Stack of Cups") to reduce UI clutter.

Hyperlocal Marketplace: Dynamic buy-back pricing comparison from nearby scrap dealers.

Smart Routing: Integrated Leaflet.js maps providing road-distance estimations and travel times (Walking/Biking/Driving).

🛠️ Tech Stack

Frontend: HTML5, JavaScript (ES6+), Tailwind CSS

AI Engine: Google Generative AI (Gemini 2.5 Flash)

Mapping: Leaflet.js & OpenStreetMap API

Icons: Lucide React / FontAwesome

📦 Installation & Setup

Since Trash Snap is a Single Page Application (SPA), getting it running is simple:

Clone the repository:

git clone [https://github.com/your-username/trash-snap.git](https://github.com/your-username/trash-snap.git)


Open the project:
Simply open index.html in any modern web browser.

API Configuration:

Obtain a Gemini API Key from Google AI Studio.

Replace the GEMINI_API_KEY constant in index.html.

📸 Screenshots

Dashboard Overview

AI Analysis

Marketplace







📐 System Architecture

The project follows an Iterative Prototyping model. Data flows from the user's camera through a Canvas pre-processor to the Gemini Vision API, which returns structured JSON for the marketplace engine.

📜 License

Distributed under the MIT License. See LICENSE for more information.

Developed with ❤️ by the Trash Snap Team.

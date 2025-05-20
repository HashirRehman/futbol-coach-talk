# Gemini Coach Talk 🧠⚽

A mobile app built with **React Native (Expo)** that generates personalized motivational pep talks for young football players using **Google's Gemini AI**.

## 🚀 Features

- 🎤 Input player name, age, and position
- 🤖 Generates a unique pep talk using Gemini AI
- 📱 Runs directly in Expo Go (no native build required)
- 🧼 Input validation and clean UI

## 🧠 Tech Stack

- React Native (via Expo)
- Google Gemini API (generative language model)
- Axios for API requests
- react-native-dotenv for secret management

## 📦 Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/HashirRehman/futbol-coach-talk.git
   cd gemini-coach-talk

2. **Install Dependencies:**
    ```bash
    npm install

3. **Set up environment variables:**

    Create a .env file in the root of the project and add your Gemini API key:
    ```bash
    GEMINI_API_KEY=your_google_gemini_api_key_without_quotes

4. **Run the app using Expo:**

    Scan the QR code using Expo Go on your Android or iOS device.
    ```bash
    npx expo start

⚠️ Note:

Requires Node.js >= 18.18 for metro compatibility.

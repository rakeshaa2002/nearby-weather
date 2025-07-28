# 🌤 Nearby Weather & Speed Indicator App

A React-based web application that displays **real-time weather** information for the user's current location, including temperature and wind speed.  
It also visualizes the wind speed using the **Canvas API** and shows **network status** using the **Network Information API**.

---

## **Features**
- **Geolocation API**: Automatically detects the user's location (latitude & longitude).
- **OpenWeather API**: Fetches real-time weather data (temperature, wind speed, and location name).
- **Canvas API**: Draws a dynamic **wind speed gauge**.
- **Network Information API**: Displays the user's network status (online/offline) and connection speed.
- **Beautiful UI**: Includes background images and styled weather cards.
- **Environment Variables**: API keys are securely stored in a `.env` file.

---

## **Tech Stack**
- **Frontend:** React JS
- **APIs:** 
  - Geolocation API
  - Canvas API
  - Network Information API
  - OpenWeather REST API
- **CSS Styling:** Custom CSS
- **Axios:** For API calls

---

## **Project Structure**
nearby-weather-app/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── WeatherInfo.js
│ │ ├── CanvasGauge.js
│ │ └── NetworkStatus.js
│ ├── hooks/
│ │ └── useGeolocation.js
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
│
├── .env
├── .gitignore
├── package.json
└── README.md
---

deployed link:https://spectacular-bubblegum-32b9b8.netlify.app/
## **Setup Instructions**

### **1. Clone the Repository**

git clone https://github.com/rakeshaa2002/nearby-weather
cd nearby-weather
2. Install Dependencies
npm install

3. Add Your API Key
Create a .env file in the root directory and add:

REACT_APP_WEATHER_KEY=your_openweather_api_key
4. Start the App

npm start
The app will run at http://localhost:3000.

How It Works
Geolocation API detects your current location.

OpenWeather API fetches the weather data based on your latitude and longitude.

Canvas API draws a wind speed gauge.

Network Information API shows your network status and speed.

Screenshots
<img width="1366" height="768" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/75ceeb23-a781-401e-9a01-34b31906dbba" />


License
This project is licensed under the MIT License.

Author
Developed by Rakesha N (MCA, 2024) – Passionate Python & React Developer.

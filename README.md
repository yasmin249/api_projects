# Web Applications Collection

A collection of simple, functional web applications built with HTML, CSS, and JavaScript. Each application demonstrates different APIs and web development concepts.

##  Projects

### 1. Smart Calculator (`/calculator`)
A feature-rich calculator with advanced mathematical functions and unit conversion capabilities.

**Features:**
- Basic arithmetic operations (+, -, ×, ÷)
- Advanced functions (sin, cos, tan, log, ln, √, π, e)
- Calculation history (stores last 5 calculations)
- Unit converter for length, area, and temperature
- Clean, responsive design

**Files:**
- `index.html` - Main HTML structure
- `script.js` - Calculator logic and unit conversion
- `style.css` - Styling and layout

### 2. WordLens Dictionary (`/dictionary`)
A modern dictionary application with beautiful UI and pronunciation features.

**Features:**
- Real-time word search with autocomplete
- Definitions, phonetics, and examples
- Audio pronunciation
- Synonyms and antonyms
- Responsive design with smooth animations
- Click on synonyms/antonyms to search related words

**API Used:**
- [Dictionary API](https://dictionaryapi.dev/) - Free English dictionary API
- Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`

**Files:**
- `index.html` - Complete single-file application with embedded CSS and JavaScript

### 3. Weather App (`/weather_app`)
A weather information app that displays current weather conditions and air quality data.

**Features:**
- Current weather conditions
- Temperature (Celsius)
- Humidity and wind information
- Air quality index (PM2.5)
- Location-based weather data
- Clean, card-based UI

**API Used:**
- [WeatherAPI](https://www.weatherapi.com/) - Comprehensive weather data API
- Endpoint: `http://api.weatherapi.com/v1/current.json`
- **Note:** Requires API key registration

**Files:**
- `index.html` - HTML structure
- `script.js` - Weather API integration
- `style.css` - Styling with gradient background

### 4. URL Fetcher (`/urlcaller`)
A simple tool for fetching content from URLs using CORS proxy.

**Features:**
- Fetch content from any URL
- CORS proxy integration
- Simple input/output interface

**API Used:**
- [AllOrigins](https://allorigins.win/) - CORS proxy service
- Endpoint: `https://api.allorigins.win/get?url={encoded_url}`

**Files:**
- `index.html` - Complete single-file application

##  Setup Instructions

### General Setup
1. Clone the repository
2. Navigate to any project folder
3. Open `index.html` in your web browser
4. Start using the application!

### Weather App Setup
1. Sign up for a free API key at [WeatherAPI](https://www.weatherapi.com/)
2. Replace the `apiKey` variable in `script.js` with your API key:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

### No Setup Required
- **Calculator**: Works offline, no API required
- **Dictionary**: Uses free public API, no key needed
- **URL Fetcher**: Uses free CORS proxy service

##  Features Highlights

- **Responsive Design**: All applications work on desktop and mobile
- **Modern UI**: Clean, modern interfaces with smooth animations
- **No Backend Required**: All applications run entirely in the browser
- **Real-time Data**: Weather and dictionary apps fetch live data
- **Offline Functionality**: Calculator works without internet connection

##  Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, flexbox, grid, animations
- **JavaScript ES6+**: Fetch API, async/await, DOM manipulation
- **External APIs**: Dictionary API, WeatherAPI, AllOrigins

##  Browser Compatibility

All applications are compatible with modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

##  Future Enhancements

- [ ] Add weather forecast (5-day prediction)
- [ ] Implement dark mode for all applications
- [ ] Add more unit conversions to calculator
- [ ] Include word definitions in multiple languages
- [ ] Add geolocation support for weather app
- [ ] Implement local storage for user preferences

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes!

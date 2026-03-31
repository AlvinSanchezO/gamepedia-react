# 🎮 Gamepedia - React SPA

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A modern video game encyclopedia application that consumes real-time data from the **RAWG API**. Developed as part of the **Frontend II** course.

---

## 🚀 Features

- **Real-time API Consumption:** Dynamic listing of popular games worldwide.
- **SPA Navigation:** Seamless transitions without page reloads using `react-router-dom`.
- **Glassmorphism Design:** Modern interface featuring frosted glass effects and a fully responsive layout.
- **Favorites System:** Data persistence using the browser's `localStorage`.
- **Security:** API Key management via environment variables (`.env`).

## 🛠️ Tech Stack

- **React 18** & **Vite** (Build tool and development environment)
- **React Router v6** (Dynamic routing)
- **Modern CSS** (Grid, Flexbox, Backdrop-filter)
- **Fetch API** (Asynchronous requests with Async/Await)

---

## 📦 Installation and Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/AlvinSanchezO/gamepedia-react.git](https://github.com/AlvinSanchezO/gamepedia-react.git)
cd gamepedia-react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure the API Key
```bash
VITE_RAWG_API_KEY=your_api_key_here
```

### 4. Start the development server
```bash
npm run dev
```

### 📂 Project Structure
## 📂 Project Structure

```text
src/
 ├── components/       # Reusable components (Navbar, GameCard)
 ├── pages/            # Main views (Home, Details, Favorites)
 ├── App.jsx           # Route configuration
 ├── main.jsx          # React entry point
 └── index.css         # Global styles and Glassmorphism effects
src/
 ├── components/       # Reusable components (Navbar, GameCard)
 ├── pages/            # Main views (Home, Details, Favorites)
 ├── App.jsx           # Route configuration
 ├── main.jsx          # React entry point
 └── index.css         # Global styles and Glassmorphism effects
```

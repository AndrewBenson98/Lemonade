# Lemonade Stand - React Frontend

A simple React application for ordering beverages from the Lemonade Stand backend API.

## Getting Started

### Prerequisites
- Node.js and npm installed on your system

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

### Running the App

1. Make sure your backend server is running on `http://localhost:3000`

2. Start the development server:
```bash
npm start
```

3. The app will open in your browser at `http://localhost:3000`

## Features

- Displays a list of beverages with prices from the backend API
- Simple form to enter customer name
- Table with beverages, prices, and quantity input boxes
- Real-time total price calculation
- Submit button to send orders to the backend
- Basic form validation

## How It Works

1. **App loads**: Fetches the list of beverages from `/api/v1/beverages`
2. **User enters name**: Types their name in the input field
3. **Select quantities**: Enter quantities for desired beverages in the table
4. **View total**: See the total price update in real-time
5. **Submit order**: Click "Submit Order" to send the order to `/api/v1/orders`

## Code Structure

- `src/index.jsx` - App entry point
- `src/App.jsx` - Main component with order logic
- `src/App.css` - Simple styling
- `public/index.html` - HTML template

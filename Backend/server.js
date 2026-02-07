const { getBeverages, addBeverage } = require('./services/beverageService.js');
const { getOrders, addOrder } = require('./services/orderService.js');
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. GET Endpoint - Returns a simple message
app.get('/api/v1/beverages', (req, res) => {
    const beverages = getBeverages();
  res.json({ beverages: beverages });
});


// 2. POST Endpoint - Gets orders and saves them to the database
app.post('/api/v1/orders', (req, res) => {
  const receivedData = req.body;
  
  //Get the request body and save it to the database
    const newOrder = addOrder(receivedData);


//Return a success response
  res.status(201).json({
    status: "Success",
    received: newOrder
  });
});


//Additional endpoints
app.get('/api/v1/orders', (req, res) => {
  const orders = getOrders();
  res.json({ orders: orders });
});

app.post('/api/v1/beverages', (req, res) => {
  const receivedData = req.body;
  
  //Get the request body and save it to the database
    const newBeverage = addBeverage(receivedData);


//Return a success response
res.status(201).json({
  status: "Success",
  received: newBeverage
});
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
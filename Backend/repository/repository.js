//Repository logic for interacting with databases would go here.
//For simplicity, I am using in-memory lists to store beverages and orders. In a real application, you would replace this with actual database interactions.

//Initialize in-memory data storage for beverages and orders
const Beverage = require('../models/beverage.js');
const Order = require('../models/order.js');

//Starter beverages
let beverages = [
    new Beverage('Lemonade', 3.99),
    new Beverage('Iced Tea', 2.99),
    new Beverage('Coffee', 2.49),
    new Beverage('Smoothie', 4.99)
];


//Initialize some starter orders
let orders = [];

function getBeveragesDB() {
    return beverages;
}

function getOrdersDB() {
    return orders;
}

function addBeverageDB(beverage) {
    beverages.push(beverage);
}

function addOrderDB(order) {
    // Here you would typically save the order to a database
    orders.push(order);
}

module.exports = { getBeveragesDB, getOrdersDB, addBeverageDB, addOrderDB };

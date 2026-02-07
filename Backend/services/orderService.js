//Service layer for handling business logic related to orders.

const { getOrdersDB,  addOrderDB, } = require('../repository/repository.js');
const {getBeveragesDB} = require('../repository/repository.js');

function getOrders() {
    const orders = getOrdersDB();   
    return orders;
} 

function addOrder(order) {
    addOrderDB(order);

    totalPrice =0;

    //Check what items are in the order and calculate the total price
    order.beverageOrders.forEach(beverageOrder => {

        //Find the price of the beverage from the repository
        const beverage = getBeveragesDB().find(b => b.name === beverageOrder.beverage.name);

        //Calculate the price for the quantity of the beverage ordered
        const quantity = beverageOrder.quantity;
        const price = beverage.price * quantity;
        totalPrice += price;
        console.log(`Added ${quantity} ${beverage.name}(s) to the order. Total price for this item: $${price.toFixed(2)}`);
    });
    //Set the total price of the order
    order.totalPrice = totalPrice;
    return order;
}

module.exports = { getOrders, addOrder };
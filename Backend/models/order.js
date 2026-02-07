//The order class
const { v4: uuidv4 } = require('uuid');
class Order {
    constructor(customerName, beverageOrders) {
        this.orderNumber = uuidv4(); // Generate a unique order number using UUID
        this.customerName = customerName;
        this.beverageOrders = beverageOrders;
        // this.quantity = quantity;
        this.totalPrice = 0;
    }
}

module.exports = Order;
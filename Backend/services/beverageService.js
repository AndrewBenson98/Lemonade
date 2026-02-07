//Service layer for handling business logic related to beverages.
const { getBeveragesDB,  addBeverageDB, } = require('../repository/repository.js');

function getBeverages() {
    const beverages = getBeveragesDB();   
    return beverages;
} 

function addBeverage(beverage) {
    addBeverageDB(beverage);
    return beverage;
}

module.exports = { getBeverages, addBeverage };

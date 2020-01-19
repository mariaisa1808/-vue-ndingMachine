/**
 * Mocking client-server processing
 */

// eslint-disable-next-line no-unused-vars
const PRODUCTS = [
    {
        "id": 1,
        "name": "Sandwich",
        "price": 15,
        "inventory": 5,
        "maxInventory": 12,
        "icon": require('../assets/sandwich.png'),
        "notInStock": require('../assets/sandwich-grey.png'),
        "code": 'snack1'
    },
    {
        "id": 2,
        "name" : "Crisps",
        "price":7,
        "inventory":3,
        "maxInventory":15,
        "icon": require('../assets/crisps.png'),
        "notInStock": require('../assets/crisps-grey.png'),
        "code": 'snack2'
    },
    {
        "id": 3,
        "name" : "Chocolate",
        "price":8,
        "inventory":10,
        "maxInventory":15,
        "icon": require('../assets/choco.png'),
        "notInStock": require('../assets/choco-grey.png'),
        "code": 'snack3'
    },
    {
        "id": 4,
        "name" : "Energy-bar",
        "price":10,
        "inventory":12,
        "maxInventory":12,
        "icon": require('../assets/energy-bar.png'),
        "notInStock": require('../assets/energy-bar-grey.png'),
        "code": 'snack4'
    },
    {
        "id": 5,
        "name" : "Soda",
        "price":5,
        "inventory":5,
        "maxInventory":8,
        "icon": require('../assets/soda.png'),
        "notInStock": require('../assets/soda-grey.png'),
        "code": 'snack5'
    },
    {
        "id": 6,
        "name" : "Orange",
        "price":4,
        "inventory":7,
        "maxInventory":10,
        "icon": require('../assets/orange.png'),
        "notInStock": require('../assets/soda-grey.png'),
        "code": 'snack6'
    },
    {
        "id": 7,
        "name" : "Energy-bar",
        "price":10,
        "inventory":8,
        "maxInventory":12,
        "icon": require('../assets/energy-bar.png'),
        "notInStock": require('../assets/energy-bar-grey.png'),
        "code": 'snack7'
    },
    {
        "id": 8,
        "name" : "Orange",
        "price":4,
        "inventory":10,
        "maxInventory":10,
        "icon": require('../assets/orange.png'),
        "notInStock": require('../assets/soda-grey.png'),
        "code": 'snack8'
    },
    {
        "id": 9,
        "name" : "Chocolate",
        "price":8,
        "inventory":3,
        "maxInventory":15,
        "icon": require('../assets/choco.png'),
        "notInStock": require('../assets/choco-grey.png'),
        "code": 'snack9'
    },
];

// eslint-disable-next-line no-unused-vars
const COINS = [
    {"name": "1¢", "value": 0.01},
    {"name": "2¢", "value": 0.02},
    {"name": "5¢", "value": 0.03},
    {"name": "10¢", "value": 0.1},
    {"name": "20¢", "value": 0.2},
    {"name": "50¢", "value": 0.5},
    {"name": "1€", "value": 1},
    {"name": "2€", "value": 2}
];

export default {
    getProducts (data) {
        setTimeout(() => data(PRODUCTS), 100)
    },
    getMoney (data) {
        setTimeout(() => data(COINS), 100)
    }
}
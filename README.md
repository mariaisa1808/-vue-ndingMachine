# vuending-machine

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


(Vue)nding machine

This project's goal is to design a vending machine using VueJs.


To access the vending machine, clone the repository.
```
git clone https://github.com/mariaisa1808/-vue-ndingMachine.git
```

Insert your coins, choose products, receive change when applicable. 

The vending machine has an interactive user interface with functionality.


Machine accepts valid coins: 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1 and 2 euros


Coins have attributes: `name`, `value`
		

Second functionality- Select a product

User inserts coins (simulated by pressing buttons) in a new modal, that updates the credit in real time.

The user then has access to a panel from where he chooses the desired product. If there is not enough credit, an alert message ('not enough credit') is displayed.

If the item is not in stock, another alert is displayed. 

A message is displayed with the selected product, and after the buying process is finished, the product will appear at the bottom tray of the vending machine from where the user can collect it.

There is a request change button, which when pressed displays a message if there are no more coins in the machine, or if the credit is bigger than 5 euros.
If change can be dispensed, the coins will appear at the bottom of the vending machine in the slot from where the user can pick it up.

There is a panel from where the inventory of the products can be modified. If a product is out of stock its image will be greyed out and the out of stock message is displayed under it.



    

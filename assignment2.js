class Purchases {
    constructor(unitprice) {
        this.unitprice = unitprice;
        this.calculateFruitCost = (fruitName, quantity) => {
            return `${quantity} ${fruitName} for KES ${parseFloat(this.unitprice*quantity).toFixed(1)}`
        }      
    }
}
let oranges = new Purchases(30.0)
let pineapples = new Purchases( 50.0)
console.log(oranges.calculateFruitCost('Oranges', 2))
console.log(pineapples.calculateFruitCost('pineapples', 5))



class KioskCalc {
     
    constructor(fruit,quantity) {
        this.fruit = fruit;
        this.quantity = quantity;
        this.fruitsListprice = {
            'orange' : 30,
            'mango'  : 15,
            'avacodo' : 40,

        };
        this.getTotalcost = () => {
            return`${this.quantity} ${this.fruit}s for KES ${parseFloat(this.fruitsListprice[fruit] *this.quantity).toFixed(1)}`
           
        }
    }

    }


var kioskCalc = new KioskCalc('orange',2);
var kioskCalc1 = new KioskCalc('mango',3);
var kioskCalc2 = new KioskCalc('avacodo',4);

console.log(kioskCalc.getTotalcost());
console.log(kioskCalc1.getTotalcost());
console.log(kioskCalc2.getTotalcost());

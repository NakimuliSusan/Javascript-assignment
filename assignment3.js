// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors. To begin with, farmers have to register on the platform and login. Thereafter, they can upload their products with respective prices. On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests.

// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain id, store name and phone number. A product should have id, name and price fields.

// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity
class Mkulima {
    constructor() {
      this.listoffarms = [];
      this.groceryvendors = [];
      this.products = [];
      this.addFarm = (farmId, name, farmer, phone, address) => {
        this.listoffarms.push({farmId, name, farmer, phone, address});
      
    };
       this.removeFarm = (Id) => {
        let target = this.listoffarms.find(item => item.id === Id);
        let farmindex = this.listoffarms.indexOf(target);
        this.listoffarms.splice(farmindex, 1);
      };
      this.updateFarm = (oldId, newFarm, newName, newFarmer,newPhone,newAddress) => {
        let currentfarm = this.listoffarms.find(item => item.farmId === oldId);
        currentfarm.farmId = newFarm;
        currentfarm.name = newName;
        currentfarm.farmer = newFarmer;
        currentfarm.phone = newPhone;
        currentfarm.address = newAddress;
      }
      this.getFarm = (Id) => {
        console.log(this.listoffarms.find(item => item.farmId === Id));
      };
      this.addProduct = (productId, name, price) => {
        this.products.push({productId, name, price});
      
    };
    this.removeProduct = (productId) => {
      let target = this.products.find(item => item.id === productId);
      let farmindex = this.products.indexOf(target);
      this.products.splice(farmindex, 1);
    };
    this.updateProduct = (old,newproductId, newname, newprice) => {
      let currentproduct = this.products.find(item => item.productId === old);
      currentproduct.name = newname;
      currentproduct.productId = newproductId;
      currentproduct.price = newprice;
    }
     this.printProducts = () => {
      console.log(this.products)
     }
     this.calculateOrderCost = (productId,quantity) => {
        let target =  this.products.find(product => product.productId === productId);
           let total = target.price * quantity;
           return `The total cost of ${quantity} ${target.name} is ${total}`;
     }
    
  }
}

let farm = new Mkulima();
farm.addFarm("36789067", "Poultry", "Pinky", "0706112100", "Mukono");
farm.addFarm("56764537", "Piggery", "Susan", "0706112100", "Mukono");
farm.addFarm("12567890","Tomato Farm","Busingye", "0784547218", "Kyaggwe");
farm.addFarm("26789354","CoffeeFarm", "Verite", "078976543" , "Kicukiro");
// console.log(farm.listoffarms);
farm.removeFarm("12567890");
farm.removeFarm("26789354");
farm.updateFarm("36789067", "12367890","Vegetables", "Verite-Umuhooza", "078976543" , "Kicukiro-Kigali");
console.log(farm.listoffarms);
farm.getFarm("56764537");
farm.addProduct("1234","Tomatoes", 35)
farm.addProduct("45678","Bananas", 350)
farm.addProduct("6789","Chicken", 1200)
farm.removeProduct("6789")
farm.updateProduct("1234","3214","Onions", 120)
farm.addProduct("2581","Potatoes", 145)
farm.printProducts();
console.log(farm.calculateOrderCost("2581", 5));
console.log(farm.calculateOrderCost("3214", 10));

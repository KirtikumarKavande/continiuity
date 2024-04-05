//parent class
class Product {
  constructor(category, price) {
    this.category = category;
    this.price = price;
  }
  display() {
    console.log("price", this.price);
  }
}

const d = new Product();

//extended class
class mobile extends Product {
  constructor(color, cat, rs) {
    super(cat, rs);
    this.color = color;
  }
}

const iphone = new mobile("black", "mobile", "10000");
iphone.display();

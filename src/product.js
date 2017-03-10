function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.inventory = 0;
}

Product.prototype.addInventory = function(newInventory) {
  this.inventory = newInventory
};
module.exports = Product;

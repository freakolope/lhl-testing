function Store(options) {
  options = options || {}
  this.products = options.products || []
}

Store.prototype.purchaseProduct = function(productName, quantity) {
  var output = {err: null, order: null};

  // Search for the product
  var product = this.products.find( function(p) {
    return p.name === productName
  });

  if (product) {
    if (product.inventory >= quantity) {
      output.order = {quantity: quantity, product: product}
      product.inventory = product.inventory - quantity
    } else {
      output.err = {message: "Product has not enough inventory"}
    }
  } else {
    output.err = {message: "Product does not exist"};
  }
  return output;
}

module.exports = Store

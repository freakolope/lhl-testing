var chai = require('chai')
var expect = chai.expect

// Product Tests
var Product = require('../src/product');

describe('Product', () => {
  it("It has a proper factory (ie constructor)", function() {
    // Execution
    var product = new Product('Lone Pine IPA', 'Best ipa ever', 2.90)
    // Assertions
    expect(product.name).to.equal("Lone Pine IPA")
    expect(product.description).to.equal('Best ipa ever')
    expect(product.price).to.equal(2.90)
    expect(product.inventory).to.equal(0)
  })

  describe('#purchaseInventory', function() {
    it('add the proper inventory', function() {
      // Background
      var product = new Product('Lone Pine IPA', 'Best ipa ever', 2.90)
      // Execution
      product.addInventory(200);
      // Assertions
      expect(product.inventory).to.equal(200);
    });
  });
})


// Test Store
var Store = require('../src/store')

describe('Store', function() {
  describe('purchaseProduct', function() {
    context('when the product doesn\'t exist', function() {
      it('throws an error that tells user the product doestn\'t exist', function() {
        // Background
        var store = new Store()
        var productName = 'My Product'
        var quantity = 1
        // Execution
        var output = store.purchaseProduct(productName, quantity)
        // Assertion
        expect(output.err).to.be.truthy
        expect(output.err.message).to.eq('Product does not exist')
        expect(output.order).to.be.null
      })
    });
    context('when no inventory exists', function() {
      it('throws an error say purchase is invalid', function() {
        // Background
        var product = new Product("My Product", "Description", 5.00);
        var store = new Store({products: [product]});

        // Execute
        var output = store.purchaseProduct("My Product", 1)
        //Assertions
        expect(output.err).to.be.ok
        expect(output.err.message).to.eq("Product has not enough inventory")
        expect(output.order).to.not.be.ok
      });
    })
    context('when there is sufficient inventory', function() {
      it('decreases the inventory by the proper amount', function() {
        // Background
        var product = new Product("My Product", "Description", 5.00);
        product.addInventory(2)
        var store = new Store({products: [product]});
        //Execution
        var output = store.purchaseProduct("My Product", 1)
        // Assertions
        expect(output.err).to.not.be.ok
        expect(output.order.quantity).to.equal(1)
        expect(product.inventory).to.equal(1)

      })
    })
  })
})

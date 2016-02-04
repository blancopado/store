describe('shopController', function() {
 
  beforeEach(module('Shop'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('ShopController', {
    	$scope: scope
    });
  }));

  it('initialises with an empty basket', function() {
    expect(scope.basket.length).toBe(0);
	});

  it('can add products to the basket', function() {
    scope.addProductToBasket("product");
    expect(scope.basket.length).toBe(1);
  });

  it('can add the same product to the basket and it updates the quantity', function() {
    scope.addProductToBasket("product");
    scope.addProductToBasket("product");
    expect(scope.basket.length).toBe(1);
    expect(scope.basket[0]["quantity"]).toBe(2);
  }); 
});
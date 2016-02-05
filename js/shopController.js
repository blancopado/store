angularShop.controller('ShopController', function($scope, $http) {

	$scope.list_of_products = [];
	$scope.basket = [];


	$http.get("./products.json")
		.success(function(data){
			$scope.list_of_products = data;
		})
		.error(function(err){
			alert('JSON file not found');
		})

	$scope.addProductToBasket = function(product) {
		
		if ($scope.productPreviouslyAdded(product)){
			return
		}else {
			$scope.basket.push({
				id: product.id,
				product_name: product.product_name,
				category: product.category,
				price: product.price,
				stock: product.stock,
				img: product.img,
				quantity: 1	
			});
		}	
	}

	$scope.productPreviouslyAdded = function(product) {
		for (var i = 0; i < $scope.basket.length; i++) {
			if ($scope.basket[i]["id"] === (product.id)) {
				return $scope.basket[i]["quantity"] += 1;
			}
		}
	}

	$scope.numberOfItemsInBasket = function() {
		var total = 0;
		for (var i = 0; i < $scope.basket.length; i++) {
			total += $scope.basket[i]["quantity"];
		}
		return total;
	}

	$scope.totalAmount = function() {
		var totalAmount = 0;
		for (var i = 0; i < $scope.basket.length; i++) {
			totalAmount += $scope.basket[i]["quantity"] * $scope.basket[i]["price"];
		}
		return totalAmount.toFixed(2);
	}

	$scope.removeProductFromBasket = function(index) {
		$scope.basket.splice(index, 1);
	}

});
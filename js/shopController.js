angularShop.controller('ShopController', function($scope, $http) {

	$scope.list_of_products = [];
	$scope.basket = [];

	$http.get("https://api.myjson.com/bins/312z9")
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

		console.log($scope.basket);
	}

	$scope.productPreviouslyAdded = function(product) {
		for (var i = 0; i < $scope.basket.length; i++) {
			if ($scope.basket[i]["id"] === (product.id)) {
				console.log($scope.basket);
				return $scope.basket[i]["quantity"] += 1;
			}
		}
	}

});
## AngularJS Store

###### I have developed a front-end Store using HTML, JavaScript, AngularJS, CSS3 & Bootstrap.

This is how the front-end app looks like:

![Alt text](./screenshots/screenshot.png)


I used 'www.myjson.com' in order to store product data in a JSON file, but unfortunately, this website is down at the moment. Google Chrome does not allow HTTP request using XMLHttpRequest from a local file so this App should be run on Firefox.

I have left the $http.get request to https://api.myjson.com/bins/312z9 commented out in case that the website is back online:

	//$http.get("https://api.myjson.com/bins/312z9") unfortunately, myjson.com is down  
	
	$http.get("./products.json")

I have completed the first three user stories:

1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping
cart.

I didn't have time to complete any other story :(


##Instructions:

Make sure you have node and bower installed:

node -v
bower -v

Make sure they both return a version number. Otherwise you will need to install them:

brew install node
npm install -g bower


There isn't any back-end scaffolding, so after cloning the repo in your computer, 'cd' in the app directory and run 'bower install' and 'npm install'. Then run the App by opening the index.html file in a Firefox browser.

Thank you!
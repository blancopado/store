## AngularJS Store

###### I have developed a front-end Store using HTML, JavaScript, AngularJS, CSS3 & Bootstrap.

This is how the front-end app looks:

![Alt text](./screenshots/screenshot.png)


I used 'www.myjson.com' in order to store product data in a JSON file, but unfortunately, this website is down at the moment. Google Chrome does not allow HTTP request using XMLHttpRequest from a local file so this App should be run on Firefox.

I have left the $http.get request to https://api.myjson.com/bins/312z9 commented out in case that the website is back online:

	//$http.get("https://api.myjson.com/bins/312z9") unfortunately, myjson.com is down  
	
	$http.get("./products.json")


There isn't any back-end scaffolding, so after cloning the repo in your computer, you can run the App by opening the index.html file in a Firefox browser.

Thank you!
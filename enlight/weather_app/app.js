"use strict";
var darkSkyAPI = "https://api.darksky.net/forecast/3a1bae6d77ec476aedf932a669c588d4";
var temperature = document.getElementById("temperature");
var geolocation = document.getElementById("geolocation");
var latitude;
var longitude;
geolocation.innerHTML = "loading...";

if(window.navigator){


	var success = function(pos){
		latitude = pos.coords.latitude;
		longitude = pos.coords.longitude;
		geolocation.innerHTML = "Latitude : " + latitude + "<br>" + 
						"Longitude: " + longitude;
		console.log(JSON.stringify(pos.coords));  // why is {}

		$.getJSON(darkSkyAPI + "/" + latitude + ',' + longitude,function(data){
			temperature.innerHTML = data.temperature;
			console.log(data);
		});


	};
	var error = function(){
		geolocation.innerHTML = "get geolocation fail";
	};

	navigator.geolocation.getCurrentPosition(success,error);
}else{
	geolocation.innerHTML = "You browser do not support navigator API";
}






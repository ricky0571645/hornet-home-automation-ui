app.service('AddressValueService', function () {
	//initialize variables
	var garageServerIP = 0;
	var garageVideoIP = 0;
	var webCamIP = 0;

	//------------GARAGE WEB SERVER----------
	var setGarageIP = function(newGarageIP){
		garageServerIP = newGarageIP;
	}

	var getGarageServerIP = function(){
    	return garageServerIP;
	};

	//------------GARAGE VIDEO CAMERA----------
	var setGarageVideoIP = function(newGarageVideoIP){
		garageVideoIP = newWebCamIP;
	}

	var getGarageVideoIP = function(){
    	return garageVideoIP;
	};

	var getFormattedGarageVideoIP = function(){
		var formattedGarageVideoIP = "http://" + garageVideoIP;
    	return formattedGarageVideoIP;
	};
	//------------WEB CAMERA----------
	var setWebCamIP = function(newWebCamIP){
		webCamIP = newWebCamIP;
	}

	var getWebCamIP = function(){
    	return webCamIP;
	};

	var getFormattedWebCamIP = function(){
		var formattedWebIP = "http://" + webCamIP;
    	return formattedWebIP;
	};

	//-----------END--------------

	return {
	setGarageIP: 			setGarageIP,
	setWebCamIP: 			setWebCamIP,
	getGarageVideoIP: 		getGarageVideoIP,
	setGarageVideoIP: 		setGarageVideoIP,
	getGarageServerIP: 		getGarageServerIP,
	getWebCamIP: 			getWebCamIP,
	getFormattedWebCamIP: 	getFormattedWebCamIP,

	getFormattedGarageVideoIP: 			getFormattedGarageVideoIP
	};
});
app.service('AddressValueService', function () {
	//initialize variables
	var garageServerIP = 0;
	var webCamIP = 0;

	//------------GARAGE WEB SERVER----------
	var setGarageIP = function(newGarageIP){
		garageServerIP = newGarageIP;
	}

	var getGarageServerIP = function(){
    	return garageServerIP;
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
	getGarageServerIP: 		getGarageServerIP,
	getWebCamIP: 			getWebCamIP,
	getFormattedWebCamIP: 	getFormattedWebCamIP
	};
});
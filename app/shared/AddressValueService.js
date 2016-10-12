app.service('AddressValueService', function () {
	//initialize variables
	var garageServerIP = 0;
	var garageVideoIP = 0;
	var webCamIP = 0;
	var smartMirrorURL = "https://www.google.com";

	//------------GARAGE WEB SERVER----------
	var setGarageIP = function(newGarageIP){
		garageServerIP = newGarageIP;
	}

	var getGarageServerIP = function(){
    	return garageServerIP;
	};

	//------------GARAGE VIDEO CAMERA----------
	var setGarageVideoIP = function(newGarageVideoIP){
		garageVideoIP = newGarageVideoIP;
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

	//------------SMART MIRROR URL----------
	var setSmartMirrorURL = function(newSmartMirrorURL){
		smartMirrorURL = newSmartMirrorURL;
	}

	var getSmartMirrorURL = function(){
    	return smartMirrorURL;
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
	setSmartMirrorURL: 		setSmartMirrorURL,
	getSmartMirrorURL: 		getSmartMirrorURL,

	getFormattedGarageVideoIP: 			getFormattedGarageVideoIP
	};
});
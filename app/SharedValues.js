app.service('SharedDataService', function () {
	var garageServerIP = 0;
	var videoIP = 0;

	var setGarageIP = function(newGarageIP){
		garageServerIP = newGarageIP;
	}

	var setVideoIP = function(newVideoIP){
		videoIP = newVideoIP;
	}


    var getGarageServerIP = function(){
      return garageServerIP;
	};

	var getVideoIP = function(){
      return videoIP;
	};

	return {
	setGarageIP: 		setGarageIP,
	setVideoIP: 		setVideoIP,
	getGarageServerIP: 	getGarageServerIP,
	getVideoIP: 		getVideoIP
	};
});
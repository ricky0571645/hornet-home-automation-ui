app.controller("GarageController", main);

function main($scope, $location, SharedDataService) {
    var vm = this;

    vm.garageDoorStatus = "Unknown";

    vm.videoIsLive = false;

    // REMEMBER TO CHANGE THIS DATA ONCE VIDEO CHANGES
    vm.webCamIP = SharedDataService.getFormattedWebCamIP();

    vm.turnVideoFeedOn = function(){
        if(vm.webCamIP != 0){
            // vm.WebCamIP = "https://" + vm.WebCamIP;
            console.log(vm.webCamIP);
            vm.videoIsLive = true;
        }
    }

    vm.toggleGarageDoor = function(isOpen)
     {

        var garageServerIP = SharedDataService.getGarageServerIP();
        if(garageServerIP != '0'){
            var theURL = 'http://' + garageServerIP;
            // condition if the button is open or close
            var params="";
            if(isOpen == true){
                params = "door=open";
            }
            else{
                params = "door=close";
            }
            
            console.log(theURL + " " + params);
            getRequest(theURL, params, function(response){
                console.log(response);
            });
        }
     }

    var getRequest = function (theUrl, params, callback){
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl+"?"+params, true); // true for asynchronous 
        xmlHttp.send(null);
    }



}


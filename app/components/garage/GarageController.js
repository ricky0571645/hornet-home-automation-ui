app.controller("GarageController", main);

function main($scope, $location, SharedDataService) {
    var vm = this;
    vm.videoIsLive = false;
    vm.videoIP = "";
    vm.videoSource = "";

    var startLiveVideo = function(){
        vm.videoIP = SharedDataService.getVideoIP();
        if(getVideoIP != 0){
            //check if you can connect to the IP
            //if so then set videoIsLive to true
            vm.videoIP = 'http://' + vm.videoIP;
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


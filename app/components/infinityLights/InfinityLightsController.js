app.controller("InfinityLightsController", main);

function main($scope, $location, AddressValueService) {
    
    var vm = this;
    
    vm.toggleColor = function(lightColor)
     {
        var garageServerIP = AddressValueService.getGarageServerIP();
        if(garageServerIP != '0'){
            var theURL = 'http://' + garageServerIP;
            // condition if the button is open or close
            var params = lightColor;

            
            getRequest(theURL, params, function(response){
                // console.log(response);
            });
        }
     }

    var getRequest = function (theUrl, params, callback){
        
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.open("GET", theUrl+"?"+params, true); // true for asynchronous 
        xmlHttp.send(null);

        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.status == 200)
            callback(xmlHttp.responseText);
            console.log(xmlHttp.responseText)
        }

    }
}


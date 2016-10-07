app.controller("WebCamController", main);

function main($scope, $location, SharedDataService) {

    var vm = this;

    vm.videoIsLive = false;
    vm.webCamIP = SharedDataService.getFormattedWebCamIP();

    vm.turnVideoFeedOn = function(){
        if(vm.webCamIP != 0){
            // vm.WebCamIP = "https://" + vm.WebCamIP;
            console.log(vm.webCamIP);
            vm.videoIsLive = true;
        }
    }

}


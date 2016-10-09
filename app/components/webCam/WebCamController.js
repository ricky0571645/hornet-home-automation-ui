app.controller("WebCamController", main);

function main($scope, $location, AddressValueService) {

    var vm = this;

    vm.videoIsLive = false;
    vm.webCamIP = AddressValueService.getFormattedWebCamIP();

    vm.turnVideoFeedOn = function(){
        if(vm.webCamIP != 0){
            // vm.WebCamIP = "https://" + vm.WebCamIP;
            console.log(vm.webCamIP);
            vm.videoIsLive = true;
        }
    }

}


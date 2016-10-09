app.controller("WebCamController", main);

function main($scope, $location, AddressValueService) {

    var vm = this;

    vm.videoIsLive = false;
    vm.buttonText = "Turn Video On";
    vm.webCamIP = AddressValueService.getFormattedWebCamIP();

    vm.turnVideoFeedOn = function(){
        if(vm.webCamIP != 0 && vm.buttonText == "Turn Video On"){
            // vm.WebCamIP = "https://" + vm.WebCamIP;
            console.log(vm.webCamIP);
            vm.videoIsLive = true;
            vm.buttonText = "Turn Video Off";
        } else{
            vm.videoIsLive = false;
            vm.buttonText = "Turn Video On";
        }
    }
}


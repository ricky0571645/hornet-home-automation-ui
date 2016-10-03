app.controller("WebCamController", main);

function main($scope, $location, SharedDataService) {

    var vm = this;

    vm.videoIsLive = false;
    vm.videoIP = "";

    vm.turnVideoFeedOn = function(){
        vm.videoIP = SharedDataService.getVideoIP();
        if(vm.videoIP != 0){
            vm.videoIP = "http://" + vm.videoIP;
            console.log(vm.videoIP);
            vm.videoIsLive = true;
        }
    }

}


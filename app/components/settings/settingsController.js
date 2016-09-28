app.controller("SettingsController", main);

function main($scope, $location, SharedDataService) {
    var vm = this;
    // filler variables
    vm.garageServerIP = SharedDataService.getGarageServerIP();
    vm.videoIP = SharedDataService.getVideoIP();

    // Changes the page to the dashboard page if the data entered is correct
    vm.updateIPValues = function()
    {
    		SharedDataService.setGarageIP(vm.garageServerIP);
            SharedDataService.setVideoIP(vm.videoIP);
            console.log(vm.garageServerIP);
    }
}


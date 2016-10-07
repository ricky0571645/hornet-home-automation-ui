app.controller("SettingsController", main);

function main($scope, $location, SharedDataService) {
    var vm = this;
    // filler variables
    vm.garageServerIP = SharedDataService.getGarageServerIP();
    vm.webCamIP = SharedDataService.getWebCamIP();

    // Changes the page to the dashboard page if the data entered is correct
    vm.updateIPValues = function()
    {
    		SharedDataService.setGarageIP(vm.garageServerIP);
            SharedDataService.setWebCamIP(vm.webCamIP);
            console.log("Garage Video IP: " + vm.garageServerIP);
            console.log("Web Camera IP: " + vm.webCamIP);
    }
}


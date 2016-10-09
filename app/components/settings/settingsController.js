app.controller("SettingsController", main);

function main($scope, $location, AddressValueService) {
    var vm = this;
    // filler variables
    vm.garageServerIP = AddressValueService.getGarageServerIP();
    vm.webCamIP = AddressValueService.getWebCamIP();

    // Changes the page to the dashboard page if the data entered is correct
    vm.updateIPValues = function()
    {
    		AddressValueService.setGarageIP(vm.garageServerIP);
            AddressValueService.setWebCamIP(vm.webCamIP);
            console.log("Garage Video IP: " + vm.garageServerIP);
            console.log("Web Camera IP: " + vm.webCamIP);
    }
}


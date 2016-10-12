app.controller("SettingsController", main);

function main($scope, $location, AddressValueService) {
    var vm = this;
    // filler variables
    vm.garageServerIP = AddressValueService.getGarageServerIP();
    vm.garageVideoIP = AddressValueService.getGarageVideoIP();
    vm.webCamIP = AddressValueService.getWebCamIP();
    vm.smartMirrorURL = AddressValueService.getSmartMirrorURL();


    // Changes the page to the dashboard page if the data entered is correct
    vm.updateIPValues = function()
    {
    		AddressValueService.setGarageIP(vm.garageServerIP);
            AddressValueService.setGarageVideoIP(vm.garageVideoIP);
            AddressValueService.setWebCamIP(vm.webCamIP);
            AddressValueService.setSmartMirrorURL(vm.smartMirrorURL);
            console.log("Garage Server IP: " + vm.garageServerIP);
            console.log("Garage Video IP: " + vm.garageVideoIP);
            console.log("Web Camera IP: " + vm.webCamIP);
            console.log("Smart Mirror URL: " + vm.smartMirrorURL);
    }
}


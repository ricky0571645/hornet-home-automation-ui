app.controller("LoginController", main);

function main($scope, $location) {
    var vm = this;
    // filler variables
    vm.userName = "username";
    vm.password = "password";
    vm.clicked = "Submit";

    // Changes the page to the dashboard page if the data entered is correct
    vm.changePage = function(path)
    {
    		$location.path(path);
    }

    // Changes the page on an enter click if data is correct
    vm.enterKeyChangePage = function(path, keyEvent)
    {
    	if(keyEvent.which === 13)
    	{
    		vm.changePage(path);
    	}
    }

}


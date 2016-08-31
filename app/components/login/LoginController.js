app.controller("LoginController", main);

function main($scope, $location) {
    var vm = this;
    vm.userName = "username";
    vm.password = "password";
    vm.clicked = "Submit";

    vm.changePage = function(path)
    {
    		$location.path(path);
    }

    vm.enterKeyChangePage = function(path, keyEvent)
    {
    	if(keyEvent.which === 13)
    	{
    		vm.changePage(path);
    	}
    }

}


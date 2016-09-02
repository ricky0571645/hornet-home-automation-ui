app.controller("DashboardController", main);

function main($scope) {
    var vm = this;

    vm.connectionLabel = "Disconnected";
    vm.loading = true;

    console.log(vm.loading);

    vm.timeOut =  function () {
       setTimeout(function () 
       {
         $scope.$apply(function()
         {
           vm.loading = false;
         });
       }, 3000);
     }

     vm.checkingForControllerConnection =  function () {
       setTimeout(function () 
       {
        vm.connectionLabel = "Connecting...";
         $scope.$apply(function()
         {
           vm.connectionLabel = "Disconnected";
         });
       }, 3000);
     }
}

app.controller("DashboardController", main);

function main($scope) {
    var vm = this;

    vm.loading = true;

    vm.timeOut =  function () {
       setTimeout(function () 
       {
         $scope.$apply(function()
         {
           vm.loading = false;
         });
       }, 3000);
     }
}

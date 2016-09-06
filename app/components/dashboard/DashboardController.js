app.controller("DashboardController", main);

function main($scope) {
    var vm = this;
    vm.homeItemStack = [];
    vm.connectionLabel = "Disconnected";
    vm.loading = true;

    //A constructor for the homeItem object
    function homeItem(itemName, itemTitle, itemData, itemImageSource,isConnected){
        this.itemName = itemName;
        this.itemTitle = itemTitle;
        this.itemData = itemData;
        this.itemImageSource = itemImageSource;
        this.isConnected = isConnected;
    }

    // Add any new cards here. Look at the model above to determine the format. 
    vm.homeItemStack.push(new homeItem("mainController", "Controller Status", " ", ' ', false));
    vm.homeItemStack.push(new homeItem("temperature", "Temperature", 87, '/assets/img/weather-icon.png', true));
    vm.homeItemStack.push(new homeItem("alarm", "Alarm Status", " ", ' ', false));
    vm.homeItemStack.push(new homeItem("lights", "Light Status", "On", '/assets/img/light_icon.png', true));
    vm.homeItemStack.push(new homeItem("shutters", "Shutters", "On", '/assets/img/light_icon.png', false));
    vm.homeItemStack.push(new homeItem("dogWater", "Dog Water", "On", '/assets/img/water.png', true));

    //a manual timeout so that you can see the screen loading
    vm.timeOut =  function () {
       setTimeout(function () 
       {
         $scope.$apply(function()
         {
           vm.loading = false;
         });
       }, 3000);
     }

     //attempts to change the vm.connection label to something different (DOESN"T WORK)
     vm.checkingForControllerConnection =  function () {
        vm.connectionLabel = "Connecting...";
       setTimeout(function () 
       {
         $scope.$apply(function()
         {
           vm.connectionLabel = "Disconnected";
         });
       }, 3000);
     }
}

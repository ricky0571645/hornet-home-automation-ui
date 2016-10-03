app.controller("DashboardController", main);

function main($scope, $location) {
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
    vm.homeItemStack.push(new homeItem("webCam", "Web Camera", "Active", './assets/img/icon-camera-128.png', true));
    vm.homeItemStack.push(new homeItem("garage", "Garage Door Controller", "Active", './assets/img/garage.png', true));
    vm.homeItemStack.push(new homeItem("infinityMirror", "Infinity Mirror", "On", './assets/img/light_icon.png', false));
    vm.homeItemStack.push(new homeItem("shutters", "Shutters", "On", './assets/img/light_icon.png', false));
    vm.homeItemStack.push(new homeItem("dogWater", "Dog Water Bowl", "Full", './assets/img/water.png', false));
    

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

     vm.sendGetRequest = function(theURL)
     {
        //do nothing for now but uncomment when you do want to do something

        // getRequest(theURL, function(response){
        //     console.log(response);
        // });
     }

    var getRequest = function (theUrl, callback){
        var params = "turnLightsOn=true";
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl+"?"+params, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    vm.processCardAction = function (item){
        if(item.itemName == "garage"){
            $location.path("/garage");
        }
        if(item.itemName == "webCam"){
            $location.path("/webCam");
        }
    }
}

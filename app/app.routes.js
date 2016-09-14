app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/components/login/login.html'})
	.when('/dashboard', {
		templateUrl: 'app/components/dashboard/dashboard.html'
	})
	.otherwise({redirectTo:'/'});
	
}]);

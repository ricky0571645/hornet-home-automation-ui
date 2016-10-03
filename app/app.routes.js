app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/components/login/login.html'})
	.when('/dashboard', {
		templateUrl: 'app/components/dashboard/dashboard.html'
	})
	.when('/about', {
		templateUrl: 'app/components/about/about.html'
	})
	.when('/contact', {
		templateUrl: 'app/components/contact/contact.html'
	})
	.when('/garage', {
		templateUrl: 'app/components/garage/garage.html'
	})
	.when('/webCam', {
		templateUrl: 'app/components/webCam/webCam.html'
	})
	.when('/settings', {
		templateUrl: 'app/components/settings/settings.html'
	})
	.otherwise({redirectTo:'/'});
	
}]);

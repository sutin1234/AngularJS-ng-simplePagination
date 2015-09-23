var app = angular.module('myApp',['simplePagination'])
app.controller('myCtrl',function($scope,Pagination,$http){

	$scope.pagination = Pagination.getNew();
	var url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";
	$scope.posts = [
		{
			name : 'sutin',
			age : 26,
			email : 'tony.sutin1234@gmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'tony.sutin1234@gmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'tony.sutin1234@gmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'tony.sutin1234@gmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'sutin17@hotmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'sutin17@hotmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'sutin17@hotmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'sutin17@hotmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'sutin17@hotmail.com'
		},
		{
			name : 'sutin',
			age : 26,
			email : 'sutin17@hotmail.com'
		},
	]

	$scope.pagination.numPages = Math.ceil($scope.posts.length/$scope.pagination.perPage);

});
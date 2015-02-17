app.controller('HeaderController', ['$scope', '$route', function ($scope, $route) {

    $scope.$route = $route;

}])

app.controller('AssociationController', ['$scope', 'Articles', function ($scope, Articles) {
    Articles.get().then(function(data){
    	$scope.articles = data;
    })
}])
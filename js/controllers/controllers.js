app.controller('HeaderController', ['$scope', '$route', function ($scope, $route) {

    $scope.$route = $route;

}])

app.controller('AssociationController', ['$scope', 'Articles', function ($scope, Articles) {
    $scope.articles = Articles.get();

}])

angular.module('bookApp.controllers',[]).controller('bookListController',function($scope,$state,$window,bookshop){

    $scope.books =  bookshop.query();
   
}).controller('bookCreateController',function($scope,$state,$stateParams,bookshop){

   $scope.book = new bookshop();

    $scope.addbook=function(){
    	$scope.book.$savebook();
    	return $state.go('books');   
    }

}); 
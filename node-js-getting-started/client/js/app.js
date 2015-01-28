
angular.module('bookApp',['ui.router','ngResource','bookApp.controllers','bookApp.services', 'anguFixedHeaderTable']);

angular.module('bookApp').config(function($stateProvider,$httpProvider){
     
    $stateProvider.state('books',{
        url:'/collections/bookshop',
        templateUrl:'partials/books.html',
        controller:'bookListController'
    }).state('newbook',{
        url:'/collections/bookshop/',
        templateUrl:'partials/book-add.html',
        controller:'bookCreateController'
    });
}).run(function($state){
   $state.go('books');
});
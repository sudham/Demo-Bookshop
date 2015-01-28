
angular.module('bookApp.services',[]).factory('bookshop',function($resource){
	
    return $resource('/collections/bookshop/',{id:'@_id'},{
        'update': { method: 'PUT', isArray: false },
        'savebook': {method:'POST', isArray: false }
    });
});
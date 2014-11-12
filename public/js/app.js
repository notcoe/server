//javascript connect with server (index.js)

angular.module("myApp",[])

.controller('mainCtrl', function($scope,$http,$window){
	$scope.books  = [];
    

	$http.get('api/book').success(function(data){  //call data from database
         $scope.books = data;
	})
    
    $scope.submit = function(){
        $http.post('api/book',{     //keep data in database
          id : $scope.id,
          title : $scope.title,
          price : $scope.price
            
	    })
         .success(function(data){  
             console.log("seccess");
             $window.location.reload();
         })

    };
	
})
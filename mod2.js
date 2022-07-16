//create module
var myapp2 = angular.module("mymod2", []);
//module is container which contains controller
//create controller
var mycontroller2 = function($scope){
    var details = [
        { Place: "Kedarnath" , price : "10k"  , likes : 0, dislikes : 0  },
        { Place: "Badrinath" , price : "20k" , likes : 0, dislikes : 0},
        { Place: "Mussorie" , price : "10k" , likes : 0, dislikes : 0},
        { Place: "Nainintal" , price : "5k" , likes : 0, dislikes : 0},
        { Place: "yamunotri" , price : "32k", likes : 0, dislikes : 0},
        { Place: "gangotri" , price : "18k" , likes : 0, dislikes : 0}


    ];
        
    //bind with scope object:
    $scope.details = details;
    $scope.rowCount = 3;
    // by default table is sorted by place
    $scope.sortColumn = "Place";

    //pl is place object
    $scope.inc_likes = function(pl){
        pl.likes++;
    }
 
    $scope.dec_likes = function(pl){
        pl.dislikes++;
    }



};

// register module with controller:
myapp2.controller("mycontroller2", mycontroller2);
//first param is name of the controller


//create module
var myapp = angular.module("mymod", []);

//create controller
var mycontroller = function($scope){
    var contact = {
        email : "bhaskaravsupraja@gmail.com",
        name : "Supraja",
        contact_number : "1234567899",
        nationality : "India"
    };
    //bind with scope object:
    $scope.contact = contact;
};

// register module with controller:
myapp.controller("mycontroller", mycontroller);
//first param is name of the controller


(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.LunchCheck = function () {
    var items = $scope.lunchItems.split(",");

    //checking if item is empty
    var itemCount = 0;
    for (var i = 0; i < items.length; i++) {
      if(items[i].trim().length > 0){
        itemCount ++;
      }
    }
    if (itemCount == 0) {
      $scope.message = "Please enter data first";
    }else if (itemCount <= 3) {
      $scope.message = "Enjoy!";
    }else {
      $scope.message = "Too much!";
    }

    if (itemCount != items.length) {
      console.log("Ignored empty item");
    }
  };
}

})();

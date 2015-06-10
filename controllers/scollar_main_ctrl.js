schollarApp.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $timeout) {
    'use strict';
    $scope.child = $("#slider").children().length;
    $scope.sliderInt = 0;
    $scope.sliderNext = 1;

    $scope.initSlider = function () {
        $scope.child;
        $scope.sliderInt;
        $scope.sliderNext;
        $("#slider").children().eq(0).fadeIn(350);
        $scope.startSlider();
    };
    $scope.startSlider = function () {

        if (sliderNext >= $scope.child) {
            $scope.sliderNext = 0;
            $scope.sliderInt = 0;
        }

        $('#slider').children().eq(sliderNext - 1).fadeOut(350);
        $('#slider').children().eq(sliderNext).fadeIn(300);
        $scope.sliderInt = $scope.sliderNext;
        $scope.sliderNext = $scope.sliderNext + 1;
    }

    $timeout(function() {$scope.startSlider()}, 3000);
}

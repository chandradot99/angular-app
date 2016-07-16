(function() {

  "use strict";

  angular.module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope) {
      $scope.classified = {
        name: 'Ruby on Rails for Beginners',
        price: 480,
        description: "Technical writer Joseph Joyner has been fascinated with computers and all things having to do with technology since a very early age. When computers were in their infancy young Joseph was tearing them apart just to see  how they worked.",
        image_url: 'images/rails.jpg'
      }
    });

}) ();
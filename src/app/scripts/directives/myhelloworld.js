'use strict';

angular.module('exampleApp')
  .directive('myHelloWorld', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myHelloWorld directive');
      }
    };
  });

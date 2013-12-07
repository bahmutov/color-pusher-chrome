(function colorPusherPanel(angular) {
  var panel = angular.module('color-pusher-panel', ['color-pusher-widget']);

  panel.controller('color-pusher-ctrl', ['$scope', colorPusherCtrl]);

  function colorPusherCtrl($scope) {
    $scope.$on('apply-colors', function onApplyColor(event, colors) {
      console.log('colors', colors);
      check.verify.object(colors, 'expected colors to be an object ' +
        JSON.stringify(colors, null, 2));

      /*
      Object.keys(colors).forEach(function (selector) {
        var css = colors[selector];
        $(selector).css(css);
      });
      */

    });
  }
}(angular));

angular.module('app', []).controller('MainController', ['$scope', '$http', function ($scope, $http) {
  $scope.images = [];
  $scope.updateImage = function () {
    console.log('change');
    var url = 'http://image.baidu.com/i' + 
      '?tn=baiduimagejson' +
      '&word=' + $scope.message +
      '&rn=200' +
      '&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function (data) {
      $scope.pictures = data.data.map(function (entry) {
        return {
          'thumb': entry.objURL,
          'source': entry.objURL
        };
      });
    });
  };
}]);

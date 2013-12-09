angular.controller('MainController', ['$scope', '$http', function ($scope, $http) {
  $scope.images = [];
  $scope.updateImage = function () {
    var url = 'http://image.baidu.com/i' + 
      '?tn=baiduimagejson' +
      '&word=' + $scope.message +
      '&rn=200'
    $http.jsonp(url).done(function (data) {
      $scope.images = data.data.map(function (entry) {
        return {
          'thumb': entry.thumbURL,
          'source': entry.objURL
        };
      });
    });
  };
}]);

angular.module('app', []).controller('MainController', ['$scope', '$http', function ($scope, $http) {
  $scope.images = [];
  $scope.updateImage = function () {
    var api = 'https://api.datamarket.azure.com/Bing/Search/Image'
      , accountKey = 'qQCEetmiVEYsMnPVd6X5u4wzX6StpyWKWGu0e3lWqFM'
      , authorization = 'Basic ' + btoa(accountKey + ':' + accountKey);
    $http.get(api, {
      params: {
        '$format': 'json',
        'Query': "'" + $scope.message + "'"
      },
      headers: {
        'Authorization': authorization
      }
    }).success(function (data) {
      $scope.pictures = data.d.results.map(function (entry) {
        return {
          'thumb': entry.Thumbnail.MediaUrl,
          'source': entry.MediaUrl
        };
      });
    });
  };
}]);

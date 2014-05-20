var blogApp = angular.module("blogApp", []);

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get("/api/blogs")
    .success(function(data) {
      $scope.blogs = data;
    })
    .error(function(data) {
      console.log("Error: " +  data);
    });

  $scope.createBlog = function() {
    $http.post("/api/blogs", $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.blogs = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  $scope.deleteBlog = function(id) {
    $http.delete("/api/blogs/" + id)
      .success(function(data) {
        $scope.blogs = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };
}

app.controller("PostsCtrl", function($scope) {
	$scope.post = {
		url: "http://",
		title: ""
	};
	$scope.posts = [];

	$scope.submitPost = function() {
		$scope.posts.push($scope.post);
		$scope.post = {url: "http://", title: ""};
	};

	$scope.deletePost = function(index) {
		$scope.posts.splice(index, 1);
	}
});
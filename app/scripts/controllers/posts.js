"use strict";

app.controller("PostsCtrl", ["$scope", "$location", "Post", "Auth", function($scope, $location, Post, Auth) {
	$scope.post = {
		url: "http://",
		title: ""
	};
	$scope.posts = Post.all;
	$scope.user = Auth.user;


	$scope.deletePost = function(post) {
		Post.delete(post);
	};
}]);
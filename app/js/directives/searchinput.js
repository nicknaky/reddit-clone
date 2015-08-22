angular
	.module("app")
	.directive("searchInput", function() {
		return {
			replace: true,
			templateUrl: "/templates/autocomplete.html"
			};
	});
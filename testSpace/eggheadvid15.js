var app = angular.module('superApp', []);

app.directive("superhero", function() {
	return {
		restrict : "E",
        scope: {},

		controller: function ($scope) {
			$scope.abilities = []

			this.addStrength = function() {
				$scope.abilities.push("Strength");
			}

			this.addSpeed = function() {
				$scope.abilities.push("Speed");
			}

			this.addFlight = function() {
				$scope.abilities.push("Flight");
			}
        },

		link: function(scope, element) {
            element.addClass("Button");
			element.bind("mouseenter", function() {
				console.log(scope.abilities);
			})
		}
	}
});

app.directive("strength", function() {
	return {
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl) {
			superheroCtrl.addStrength();
		}
	}
});

app.directive("speed", function() {
	return {
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	}
});

app.directive("flight", function() {
	return {
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl) {
			superheroCtrl.addFlight();
		}
	}
});
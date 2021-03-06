'user strict'

angular.module('messangerApp').controller('UserRegistrationsCtrl', ['$scope', '$auth', function($scope, $auth){
  $scope.errors = [];

  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
    .then(function(){
      $auth.submitLogin({
        email: $scope.registrationForm.email,
        password: $scope.registrationForm.password
      })
    });
  };

  $scope.$on('auth:registration-email-error', function(ev, reason){
     $scope.errors = reason.errors.full_messages
  });
  $scope.$on('auth:validation-error', function(ev, reason){
    $scope.errors = reason.errors.full_messages
  });
}]);

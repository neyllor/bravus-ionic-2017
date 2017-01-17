angular.module('starter')

.service('AuthService', function($q, $http, USER_ROLES){
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;
})

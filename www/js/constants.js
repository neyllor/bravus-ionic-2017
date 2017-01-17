angular.module('starter')

.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthroized: 'auth-not-authroized'
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public'
});

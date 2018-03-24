import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import Ember from 'ember';

const { Route } = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'dashboard'
});

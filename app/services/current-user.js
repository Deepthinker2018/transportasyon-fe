import Service, { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    if (!get(this, 'session.isAuthenticated')) {
      return RSVP.resolve();
    }
    return get(this, 'store').queryRecord('user', { me: true }).then((user) => {
      set(this, 'user', user);
    });
  }
});

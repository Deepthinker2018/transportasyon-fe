import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),
  session: service(),

  actions: {
    logout() {
      get(this, 'session').invalidate();
    }
  }
});

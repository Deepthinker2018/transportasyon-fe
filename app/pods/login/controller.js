import FocusErrorMixin from 'transportasyon-fe/mixins/focus-error-mixin';
import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend(FocusErrorMixin, {
  session: service(),

  errors: computed('error', function() {
    return get(this, 'error.errors');
  }),

  setError(error) {
    set(this, 'error', error);
  },

  errorMessage: computed('error', function() {
    const status = get(this, 'error.status_code');
    return status !== 422 && get(this, 'error.message');
  }),

  actions: {
    login(params) {
      this.setError(null);
      const { username, password } = params;
      return get(this, 'session')
        .authenticate('authenticator:oauth2', username, password)
        .catch((error) => {
          this.setError(error);
          this.focusError();
        });
    }
  }
});

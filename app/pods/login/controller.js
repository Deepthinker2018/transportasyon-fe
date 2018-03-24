import FocusErrorMixin from 'transportasyon-fe/mixins/focus-error-mixin';
import Ember from 'ember';

const {
  Controller,
  computed,
  get,
  inject,
  set
} = Ember;

export default Controller.extend(FocusErrorMixin, {
  session: inject.service(),

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

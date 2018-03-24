import FocusErrorMixin from 'building-management-dashboard/mixins/focus-error-mixin';
import Ember from 'ember';

const { Component } = Ember;

export default Component.extend(FocusErrorMixin, {
  _password: '',

  actions: {
    unlock() {
      this.setProperties({
        _validationErrors: null,
        _errorMessage: null
      });

      this.get('onSubmit')({
        identification: this.get('user.email'),
        password: this.get('_password')
      }).catch((error) => {
        if (error.status_code === 422) {
          this.set('_validationErrors', error.errors);
        } else {
          this.set('_errorMessage', error.message);
        }
        this.focusError();
      });
    }
  }
});

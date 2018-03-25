import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['hasError'],

  hasError: computed.bool('errors.length'),

  errorMessages: computed.map('errors', function(error) {
    return error.message || error;
  })
});

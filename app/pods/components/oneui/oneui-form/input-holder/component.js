import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNameBindings: ['hasError'],

  hasError: computed.bool('errors.length'),

  errorMessages: computed.map('errors', function(error) {
    return error.message || error;
  })
});

import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  isVisible: computed('model.status_code', function() {
    return !!this.get('model.status_code');
  })
});

import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'form',

  submit() {
    const callback = this.get('onSubmit');
    if (callback) {
      callback();
      return false;
    }
  }
});

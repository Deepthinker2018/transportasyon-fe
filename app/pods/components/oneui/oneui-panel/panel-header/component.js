import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['block-header'],
  classNameBindings: ['_headerBg'],

  _headerBg: computed('type', function() {
    return `bg-${this.get('type')}`;
  })
});

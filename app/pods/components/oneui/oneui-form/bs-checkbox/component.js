import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
  tagName: 'label',
  classNames: ['css-input', 'css-checkbox'],
  classNameBindings: ['_checkboxType'],

  type: 'default',

  _checkboxType: computed('type', function() {
    return `css-checkbox-${get(this, 'type')}`;
  })
});

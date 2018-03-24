import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['block-content'],
  classNameBindings: ['narrow:block-content-narrow']
});

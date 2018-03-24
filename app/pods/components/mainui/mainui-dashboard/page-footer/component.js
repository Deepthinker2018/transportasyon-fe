import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  elementId: 'page-footer',
  tagName: 'footer',
  classNames: ['content-mini', 'content-mini-full', 'font-s12', 'bg-gray-lighter', 'clearfix']
});

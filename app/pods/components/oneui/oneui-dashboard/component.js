import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  elementId: 'page-container',
  classNames: ['sidebar-l', 'sidebar-o', 'side-scroll', 'header-navbar-fixed'],
  classNameBindings: ['open::sidebar-mini'],
  open: true
});

import Ember from 'ember';

const { Component, $ } = Ember;

export default Component.extend({
  elementId: 'sidebar',
  tagName: 'nav',

  actions: {
    close() {
      const  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const pageContainer = $('#page-container');
      if (width > 991) {
        pageContainer.removeClass('sidebar-o');
      } else {
        pageContainer.removeClass('sidebar-o-xs');
      }
    }
  }
});

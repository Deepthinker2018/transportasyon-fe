import Ember from 'ember';

const { Component, $ } = Ember;

export default Component.extend({
  elementId: 'header-navbar',
  tagName: 'header',
  classNames: ['content-mini', 'content-mini-full'],

  actions: {
    toggleSidebar(toggleMode) {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const pageContainer = $('#page-container');

      switch (toggleMode) {
        case 'sidebar_toggle':
          if (width > 991) {
            pageContainer.toggleClass('sidebar-o');
          } else {
            pageContainer.toggleClass('sidebar-o-xs');
          }
          break;
        case 'sidebar_mini_toggle':
          if (width > 991) {
            pageContainer.toggleClass('sidebar-mini');
          }
          break;
      }
    }
  }
});

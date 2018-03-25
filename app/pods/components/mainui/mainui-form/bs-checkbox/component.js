import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  tagName: 'label',
  classNames: ['css-input', 'css-checkbox'],
  classNameBindings: ['_checkboxType'],

  type: 'default',

  _checkboxType: computed('type', function() {
    return `css-checkbox-${get(this, 'type')}`;
  })
});

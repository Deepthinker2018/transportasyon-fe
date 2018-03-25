import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['block-header'],
  classNameBindings: ['_headerBg'],

  _headerBg: computed('type', function() {
    return `bg-${this.get('type')}`;
  })
});

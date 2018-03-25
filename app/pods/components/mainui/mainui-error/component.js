import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isVisible: computed('model.status_code', function() {
    return !!this.get('model.status_code');
  })
});

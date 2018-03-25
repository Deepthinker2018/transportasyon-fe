import Mixin from '@ember/object/mixin';
import { run } from '@ember/runloop';
import $ from 'jquery';

export default Mixin.create({
  focusError() {
    run.scheduleOnce('afterRender', () => {
      const invalidInput = $('.has-error:first').find('input,textarea').focus().select();
      if (!invalidInput.length) {
        $('input:first').focus().select();
      }
    });
  }
});

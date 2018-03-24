import Ember from 'ember';

const {
  Mixin,
  run,
  $
} = Ember;

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

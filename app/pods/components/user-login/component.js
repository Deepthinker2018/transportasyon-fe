import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  username: '',
  password: '',

  actions: {
    login(){
      const callback = get(this, 'onLogin');
      if (callback) {
        const properties = this.getProperties('username', 'password');
        return callback(properties);
      }
    }
  }
});

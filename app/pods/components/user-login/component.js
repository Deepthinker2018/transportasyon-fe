import Component from '@ember/component';
import { get } from '@ember/object';

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

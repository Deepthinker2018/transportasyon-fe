import { computed, get } from '@ember/object';
import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),

  fullName: computed('firstName', 'lastName', function() {
    const firstName = get(this, 'firstName');
    const lastName = get(this, 'lastName');
    return `${firstName} ${lastName}`;
  })
});


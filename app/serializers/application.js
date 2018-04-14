import { merge } from '@ember/polyfills';
import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  serializeIntoHash(hash, type, record, options) {
    merge(hash, this.serialize(record, options));
  }
});

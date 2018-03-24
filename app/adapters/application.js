import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import DS from 'ember-data';
import ENV from 'transportasyon-fe/config/environment';

const {
  RESTAdapter,
  errorsHashToArray
} = DS;

const {
  APP: {
    apiHost,
    apiNamespace,
    apiStandardsTree,
    apiSubtype,
    apiVersion
  }
} = ENV;


export default RESTAdapter.extend(DataAdapterMixin, {
  host: apiHost,
  namespace: apiNamespace,
  authorizer: 'authorizer:oauth2',
  headers: {
    Accept: `application/${apiStandardsTree}.${apiSubtype}.${apiVersion}+json`
  },

  handleResponse(status, headers, payload) {
    if (this.isInvalid(...arguments)) {
      payload.errors = errorsHashToArray(payload.errors);
      return this._super(...arguments);
    }
    return payload;
  }
});

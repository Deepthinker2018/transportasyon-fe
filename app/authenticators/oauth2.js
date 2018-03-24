import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'transportasyon-fe/config/environment';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.APP.apiHost}/api/token`
});

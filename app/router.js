import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('links', function() {
    this.route('show', {
      path: ':link_id'
    });
  });
});

export default Router;

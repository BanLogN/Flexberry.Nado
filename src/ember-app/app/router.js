import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-nado-надо-l');
  this.route('i-i-s-nado-надо-e',
  { path: 'i-i-s-nado-надо-e/:id' });
  this.route('i-i-s-nado-надо-e.new',
  { path: 'i-i-s-nado-надо-e/new' });
});

export default Router;

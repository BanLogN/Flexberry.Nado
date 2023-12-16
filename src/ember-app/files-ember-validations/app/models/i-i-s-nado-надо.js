import {
  defineNamespace,
  defineProjections,
  Model as НадоMixin
} from '../mixins/regenerated/models/i-i-s-nado-надо';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НадоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

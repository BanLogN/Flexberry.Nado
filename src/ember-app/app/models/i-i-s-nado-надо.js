import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НадоMixin
} from '../mixins/regenerated/models/i-i-s-nado-надо';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НадоMixin, Validations, {
});

defineProjections(Model);

export default Model;

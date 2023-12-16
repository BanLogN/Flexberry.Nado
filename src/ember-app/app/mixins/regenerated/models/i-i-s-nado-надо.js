import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  надо: DS.attr('string')
});

export let ValidationRules = {
  надо: {
    descriptionKey: 'models.i-i-s-nado-надо.validations.надо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НадоE', 'i-i-s-nado-надо', {
    надо: attr('Надо', { index: 0 })
  });

  modelClass.defineProjection('НадоL', 'i-i-s-nado-надо', {
    надо: attr('Надо', { index: 0 })
  });
};

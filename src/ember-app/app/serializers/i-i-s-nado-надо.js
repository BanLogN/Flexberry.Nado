import { Serializer as НадоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nado-надо';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НадоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

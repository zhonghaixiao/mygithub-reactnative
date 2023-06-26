import Realm from 'realm';

export default class Classification extends Realm.Object {
  static schema = {
    name: 'Classification',
    properties: {
      _id: 'uuid',
      title: 'string',
      color: 'string',
    },
    primaryKey: '_id',
  };
}

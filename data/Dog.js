import Realm from 'realm';

export default class Dog extends Realm.Object {
  static schema = {
    name: 'Dog',
    properties: {
      _id: 'int',
      name: {
        type: 'string',
        indexed: true,
      },
      price: 'int?',
      owners: {
        type: 'list',
        objectType: 'Person',
        optional: true,
      },
      age: 'int?',
    },
    primaryKey: '_id',
  };
}

import Realm from 'realm';

export default class Task extends Realm.Object {
  static schema = {
    name: 'Task',
    properties: {
      _id: 'string',
      title: 'string',
      duration: 'int',
      priority: 'int',
      cost: 'int',
      deadline: 'date',
      classification: 'string',
    },
    primaryKey: '_id',
  };
}

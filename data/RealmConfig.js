import { createRealmContext } from '@realm/react';
import Classification from './Classification';
import Task from './Task';

const {
  RealmProvider, useQuery, useObject, useRealm,
} = createRealmContext({
  schema: [Task, Classification],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: 2,
});

export default RealmProvider;

export { useQuery, useObject, useRealm };

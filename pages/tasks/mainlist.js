import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { v4 as uuid } from 'uuid';
import { useQuery, useRealm } from '../../data/RealmConfig';
import Task from '../../data/Task';
import { pTx } from '../../utils/screenutils';

export default function MainList() {
  const realm = useRealm();
  const tasks = useQuery(Task);

  React.useEffect(() => {
    realm.write(() => {
      for (let index = 0; index < 100; index += 1) {
        realm.create('Task', {
          _id: uuid(),
          title: `task${index}`,
          duration: 123,
          priority: 1,
          cost: 20,
          deadline: new Date(),
          classification: 'aaa',
        });
      }
    });
  }, []);

  if (tasks.length === 0) {
    return (
      <View>
        <Text>Empty List</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <Item title={item.title} index={index} key={item._id} id={item._id} />
        )}
        getItemLayout={(data, index) => (
          {
            length: pTx(80),
            offset: pTx(80) * index,
            index,
          }
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

function Item({ title, index, id }) {
  return (
    <View style={styleSheet.itemContainer}>
      <Text>
        {index}
        :
        {title}
        :
        {id.toString()}
      </Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: pTx(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: pTx(10),
  },
});

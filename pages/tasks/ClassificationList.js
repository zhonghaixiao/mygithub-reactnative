import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import IconAll from '../../svgs/IconAll.svg';
import { pTx } from '../../utils/screenutils';

export default function classificationList() {
  return (
    <>
      <Item title="全部" count={14} color="blue" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={3} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={4} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
      <Item title="全部" count={14} color="#ff3399" />
    </>
  );
}

function Item({ title, count, color }) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {}}
    >
      <View style={styles.classItem}>
        <IconAll fill={color} width={pTx(20)} height={pTx(20)} />
        <Text style={styles.textClassTitle}>{title}</Text>
        <Text style={styles.textClassCount}>{count}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  classItem: {
    height: pTx(50),
    paddingLeft: pTx(10),
    paddingRight: pTx(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textClassTitle: {
    color: '#999999',
    fontSize: pTx(16),
    flex: 1,
    marginLeft: pTx(15),
  },
  textClassCount: {
    color: '#999999',
    fontSize: pTx(14),

  },
});

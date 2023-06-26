import React from 'react';
import {
  StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';
import { pTx } from '../../utils/screenutils';
import IconAdd from '../../svgs/IconAdd.svg';
import IconSetting from '../../svgs/IconSetting.svg';

export default function DrawerFooter() {
  return (
    <View style={styles.footerContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {}}
      >
        <View style={styles.item}>
          <IconAdd fill="#666666" width={pTx(16)} height={pTx(16)} />
          <Text style={styles.itemText}>创建清单</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {}}
      >
        <View style={styles.item}>
          <IconSetting fill="#666666" width={pTx(16)} height={pTx(16)} />
          <Text style={styles.itemText}>管理清单</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: pTx(10),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: pTx(10),
    paddingBottom: pTx(10),
  },
  itemText: {
    marginLeft: pTx(5),
  },
});

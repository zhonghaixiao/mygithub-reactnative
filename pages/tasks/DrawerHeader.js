import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { pTx } from '../../utils/screenutils';
import RightArrow from '../../svgs/right_arrow.svg';

export default function DrawerHeader() {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.headImage}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.personInfo}>
        <Text style={styles.infoText}>仲海啸</Text>
        <Text style={styles.infoText}>ID:445013</Text>
      </View>
      <RightArrow fill="#333333" width={pTx(20)} height={pTx(20)} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: pTx(10),
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: pTx(15),
  },
  headImage: {
    width: pTx(60),
    height: pTx(60),
    borderRadius: pTx(30),
  },
  personInfo: {
    flex: 1,
    marginLeft: pTx(10),
    marginRight: pTx(10),
  },
  infoText: {
    color: '#333333',
    fontSize: pTx(15),
  },
  rightIcon: {
    width: pTx(10),
    height: pTx(10),
  },
});

import React, { useState } from 'react';

import {
  Dimensions,
  Image,
  PermissionsAndroid,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
// import { ScaledSheet } from 'react-native-size-matters';
// import { ScaledSheet } from 'react-native-size-matters/extend';

import { API_TOKEN, API_URL, SIZE_MATTERS_BASE_WIDTH } from '@env';

import { pTx } from './utils/screenutils';

// import styles from './app.scss';

const size = 50;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={[styles.blue, styles.scrollContainer]}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={requestCameraPermision}
          activeOpacity={0.8}
        >
          <Text style={styles.nextValue}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>{API_URL}</Text>
        <Text>{API_TOKEN}</Text>
        <Text>{SIZE_MATTERS_BASE_WIDTH}</Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.container}>
        <Text style={styles.value}>
          width:
          {width}
        </Text>
        <Text style={styles.value}>
          height:
          {height}
        </Text>
      </View>
      <View style={styles.container}>
        <Text>Current Pixel Ratio is:</Text>
        <Text style={styles.value}>{PixelRatio.get()}</Text>
      </View>
      <View style={styles.container}>
        <Text>Current Font Scale is:</Text>
        <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
      </View>
      <View style={styles.container}>
        <Text>On this device images with a layout width of</Text>
        <Text style={styles.value}>
          {size}
          {' '}
          px
        </Text>
        <Image source={cat} />
      </View>
      <View style={styles.container}>
        <Text>require images with a pixel width of</Text>
        <Text style={styles.value}>
          {PixelRatio.getPixelSizeForLayoutSize(size)}
          {' '}
          px
        </Text>
        <Image
          source={cat}
          style={{
            width: PixelRatio.getPixelSizeForLayoutSize(size),
            height: PixelRatio.getPixelSizeForLayoutSize(size),
          }}
        />
      </View>
    </ScrollView>
  );
}

const requestCameraPermision = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera '
          + 'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('you can use the camera');
    } else {
      console.log('camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    marginTop: pTx(10),
    width: pTx(327),
    height: pTx(44),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCA27',
    borderRadius: 15,
  },
  nextValue: {
    color: '#0B0B0B',
    fontWeight: 600,
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
  },
});

export default App;

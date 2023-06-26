import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Button,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { getHeaderTitle } from '@react-navigation/elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import OpenDrawer from '../../svgs/opendrawer.svg';
import { pTx } from '../../utils/screenutils';
import MainList from './mainlist';
import DrawerHeader from './DrawerHeader';
import ClassificationList from './ClassificationList';
import DrawerFooter from './DrawerFooter';

const Drawer = createDrawerNavigator();

export default function TaskList() {
  return (
    <MyDrawer />
  );
}

function MyHeader({ title, navigation }) {
  return (
    <View style={{
      flexDirection: 'row',
      height: pTx(50),
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: pTx(10),
      paddingRight: pTx(10),
    }}
    >
      <TouchableHighlight
        underlayColor="#66ccff"
        activeOpacity={0.8}
        onPress={() => navigation.openDrawer()}
      >
        <OpenDrawer fill="#000" width={pTx(30)} height={pTx(30)} />
      </TouchableHighlight>
      <Text style={{
        color: '#333333',
        fontSize: pTx(18),
        fontWeight: 'bold',
      }}
      >
        {title}
      </Text>
    </View>
  );
}

function MyDrawer() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      defaultStatus="open"
      drawerContent={(props) => <PersonInfoInDrawer {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerHideStatusBarOnOpen: false,
        drawerStyle: {
          width: pTx(300),
        },
        swipeEnabled: true,
        swipeEdgeWidth: pTx(80),
        overlayColor: 'transparent',
        headerShown: true,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <MyHeader title={title} style={options.headerStyle} navigation={navigation} />;
        },
      }}
    >
      <Drawer.Screen name="MainList" component={MainList} />
    </Drawer.Navigator>
  );
}

function PersonInfoInDrawer(props) {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));
  const { navigation, state } = props;
  return (
    <Animated.View style={[styles.drawerContainer, animatedStyle]}>
      <DrawerHeader />
      <ScrollView
        style={styles.drawerContent}
        showsVerticalScrollIndicator={false}
      >
        <ClassificationList />
      </ScrollView>
      <DrawerFooter />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#e3e3e3',
    flexDirection: 'column',
    flex: 1,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: pTx(10),
    paddingBottom: pTx(10),
  },
  drawerFooter: {
    backgroundColor: 'white',
  },
});

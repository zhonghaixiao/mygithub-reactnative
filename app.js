import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';

import { getHeaderTitle } from '@react-navigation/elements';
import TestStausBar from './pages/test/testStatusBar';

import EditorCenterAlignment from './svgs/editor-center-alignment.svg';
import MainPage from './pages/main/mainPage';

import { storeData, getData } from './test_storage';
import TaskRealmProvider from './data/RealmConfig';

const Stack = createNativeStackNavigator();

export default function AppWrapper() {
  return (
    <TaskRealmProvider>
      <App />
    </TaskRealmProvider>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={MainPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            header: HomeHeader,
          }}
        />
        <Stack.Screen
          name="AccountManager"
          component={AccountManager}
        />
        <Stack.Screen
          name="logout"
          component={Logout}
        />
        <Stack.Screen
          name="testStatusBar"
          component={TestStausBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <View>
      <StatusBar
        translucent={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Text>Home</Text>
      <Text>
        Height:
        {StatusBar.currentHeight}
      </Text>
    </View>
  );
}

function HomeHeader({
  navigation, route, options, back,
}) {
  const title = getHeaderTitle(options, route.name);
  return (
    <View style={{ flex: 1 }}>
      <EditorCenterAlignment width={120} height={40} />
    </View>
  );
}

function AccountManager() {
  return (
    <View>
      Account manager
    </View>
  );
}

function Logout() {
  return (
    <View>
      Logout
    </View>
  );
}

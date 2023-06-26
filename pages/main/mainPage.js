import { StatusBar, View, Text } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from '../tasks/taskList';
import TaskCalendar from '../calendarview/calendarview';
import TaskStatistics from '../statistics/taskStatistics';
import Mine from '../mine/mine';
import TaskIcon from '../../svgs/tasks.svg';
import CalendarIcon from '../../svgs/calendar2.svg';
import StatisticsIcon from '../../svgs/statistics.svg';
import MineIcon from '../../svgs/user.svg';
import { pTx } from '../../utils/screenutils';

const Tab = createBottomTabNavigator();

function MainPage() {
  return (
    <>
      <Tab.Navigator
        id="mainTab"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
          tabBarStyle: {
            paddingTop: pTx(10),
          },
          tabBarLabelStyle: {
            fontSize: pTx(14),
            marginTop: pTx(10),
          },
        }}
      >
        <Tab.Screen
          name="TaskList"
          component={TaskList}
          options={{
            headerShown: false,
            tabBarLabel: '任务',
            tabBarIcon: ({ color, size }) => <TaskIcon fill={color} width={size} height={size} />,
          }}
        />
        <Tab.Screen
          name="TaskCalendar"
          component={TaskCalendar}
          options={{
            tabBarLabel: '日历',
            tabBarIcon: ({ color, size }) => <CalendarIcon fill={color} width={size} height={size} />,
          }}
        />
        <Tab.Screen
          name="TaskStatistics"
          component={TaskStatistics}
          options={{
            tabBarLabel: '统计',
            tabBarIcon: ({ color, size }) => <StatisticsIcon fill={color} width={size} height={size} />,
          }}
        />
        <Tab.Screen
          name="Mine"
          component={Mine}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({ color, size }) => <MineIcon fill={color} width={size} height={size} />,
          }}
        />
      </Tab.Navigator>
      <StatusBar translucent={false} backgroundColor="white" barStyle="dark-content" />
    </>
  );
}

export default MainPage;

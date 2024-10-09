import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/Explore';

import FindBuddy from '../screens/FindBuddy';
import Booking from '../screens/Booking';

import {
  BellIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  FireIcon,
  HomeIcon,
  SquaresPlusIcon,
  UsersIcon,
} from 'react-native-heroicons/outline';
import DiveLogs from '../screens/DiveLogs';
 
import { Path, Svg } from 'react-native-svg';


function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    // tabBar={(props) => <CurvedBottomTabBar {...props} />} 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let IconComponent;

          // Assign different icons to each tab
          if (route.name === 'Home') {
            IconComponent = HomeIcon;
          } else if (route.name === 'Explore') {
            IconComponent = FireIcon;
          } else if (route.name === 'DiveLogs') {
            IconComponent = CalendarDaysIcon;
          } else if (route.name === 'FindBuddy') {
            IconComponent = UsersIcon;
          } else if (route.name === 'Booking') {
            IconComponent = SquaresPlusIcon;
          }

           
          return IconComponent ? (
            <IconComponent color={focused ? '#1f6ec7' : '#888'} />
          ) : null;
        },
        tabBarActiveTintColor: '#1f6ec7', // Active text/icon color
        tabBarInactiveTintColor: '#888', // Inactive text/icon color
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
          paddingBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          // borderRadius: 15,
          height: 62,
          marginBottom: 0,
          paddingBottom: 5,
          borderTopEndRadius: 15,
          borderTopLeftRadius: 15,
          // paddingTop: 5,
          // marginLeft: 5,
          // marginRight: 5
          // shadowColor: '#000',
          // shadowOffset: { width: 0, height: 4 },
          // shadowOpacity: 0.3,
          // shadowRadius: 5,
          // elevation: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarBackground: () => (
          <Svg
            height="100"
            width="100%"
            viewBox="0 0 1440 320"
            style={{position: 'absolute', bottom: 0}}>
            <Path
              fill="#ffffff"
              d="M0,224L80,213.3C160,203,320,181,480,160C640,139,800,117,960,133.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </Svg>
        ),
      })}
    >
      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ ...styles.backButton, ...styles.shadowProp }}>
              <ChevronLeftIcon
                size={29}
                strokeWidth={2}
                color={'#fff'}
                style={{ marginLeft: -3 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                marginTop: -5,
              }}
            >
              Search Buddy
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                ...styles.backButton,
                ...styles.shadowProp,
                marginRight: 10,
                position: 'relative',
              }}
            >
              <View style={styles.dot} />
              <BellIcon size={29} strokeWidth={2} color={'#fff'} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#051644',
          },
        }}
        name="Home"
        component={HomeScreens}
      />

      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ ...styles.backButton, ...styles.shadowProp }}>
              <ChevronLeftIcon
                size={29}
                strokeWidth={2}
                color={'#fff'}
                style={{ marginLeft: -3 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                marginLeft: 5,
                fontWeight: 'bold',
                marginTop: -7,
              }}
            >
              Explore
            </Text>
          ),
          headerStyle: {
            backgroundColor: '#051644',
          },
        }}
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ ...styles.backButton, ...styles.shadowProp }}>
              <ChevronLeftIcon
                size={29}
                strokeWidth={2}
                color={'#fff'}
                style={{ marginLeft: -3 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                marginLeft: 5,
                fontWeight: 'bold',
                marginTop: -7,
              }}
            >
              Dive Log
            </Text>
          ),
          headerStyle: {
            backgroundColor: '#051644',
          },
        }}
        name="DiveLogs"
        component={DiveLogs}
      />

      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ ...styles.backButton, ...styles.shadowProp }}>
              <ChevronLeftIcon
                size={29}
                strokeWidth={2}
                color={'#fff'}
                style={{ marginLeft: -3 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                marginLeft: 5,
                fontWeight: 'bold',
                marginTop: -7,
              }}
            >
              Find Buddy
            </Text>
          ),
          headerStyle: {
            backgroundColor: '#051644',
          },
        }}
        name="FindBuddy"
        component={FindBuddy}
      />

      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ ...styles.backButton, ...styles.shadowProp }}>
              <ChevronLeftIcon
                size={29}
                strokeWidth={2}
                color={'#fff'}
                style={{ marginLeft: -3 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                marginLeft: 5,
                fontWeight: 'bold',
                marginTop: -7,
              }}
            >
              Booking
            </Text>
          ),
          headerStyle: {
            backgroundColor: '#051644',
          },
        }}
        name="Booking"
        component={Booking}
      />
    </Tab.Navigator>
  );
}



const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Homes"
            component={MyTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#39476c',
    height: 45,
    width: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 5,
  },
  shadowProp: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  dot: {
    backgroundColor: '#1f6ec7',
    position: 'absolute',
    height: 9,
    width: 9,
    borderRadius: 50,
    top: 10,
    right: 10,
    zIndex: 1,
  },
});








import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { HomeIcon, FireIcon, CalendarDaysIcon, UsersIcon, SquaresPlusIcon } from 'react-native-heroicons/outline';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      {/* SVG Background */}
      <Svg height="100" width="100%" viewBox="0 0 1440 320">
        <Path
          fill="#ffffff"
          d="M0,224L80,213.3C160,203,320,181,480,160C640,139,800,117,960,133.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </Svg>

      {/* Tab Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', width: '100%', bottom: 10 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          // Define the icons for each route
          let IconComponent;
          if (route.name === 'Home') IconComponent = HomeIcon;
          if (route.name === 'Explore') IconComponent = FireIcon;
          if (route.name === 'DiveLogs') IconComponent = CalendarDaysIcon;
          if (route.name === 'FindBuddy') IconComponent = UsersIcon;
          if (route.name === 'Booking') IconComponent = SquaresPlusIcon;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity key={index} onPress={onPress} style={{ alignItems: 'center' }}>
              <IconComponent color={isFocused ? '#1f6ec7' : '#888'} size={29} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;

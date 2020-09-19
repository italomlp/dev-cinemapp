import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, metrics } from '../styles';

import MoviesSearch from '../pages/MoviesSearch';
import Favorites from '../pages/Favorites';

const TabNavigator = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        style: {
          height: metrics.bottomTabBarHeight,
        },
        labelStyle: {
          paddingBottom: 6,
          fontSize: 12,
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.inactive,
      }}>
      <TabNavigator.Screen
        name="MoviesSearch"
        component={MoviesSearch}
        options={{
          title: 'Filmes',
          tabBarIcon: (props) => <Ionicons name="videocam" {...props} />,
        }}
      />
      <TabNavigator.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favoritos',
          tabBarIcon: (props) => <Ionicons name="star" {...props} />,
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default AppRouter;

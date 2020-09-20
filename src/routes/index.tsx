import React, { useMemo } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, metrics } from '../styles';

import MoviesSearch from '../pages/MoviesSearch';
import Favorites from '../pages/Favorites';

const TabNavigator = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  const insets = useSafeAreaInsets();

  const tabBarHeight = useMemo(() => {
    return metrics.bottomTabBarHeight + insets.bottom;
  }, [insets]);

  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        style: {
          height: tabBarHeight,
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

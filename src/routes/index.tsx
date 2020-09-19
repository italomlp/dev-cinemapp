import React from 'react';
import { Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        labelStyle: {
          paddingBottom: 6,
          fontSize: 12,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <TabNavigator.Screen
        name="Movies"
        component={() => <Text>Movies</Text>}
        options={{
          title: 'Filmes',
          tabBarIcon: (props) => <Ionicons name="videocam" {...props} />,
        }}
      />
      <TabNavigator.Screen
        name="Favorites"
        component={() => <Text>Favorites</Text>}
        options={{
          title: 'Favoritos',
          tabBarIcon: (props) => <Ionicons name="star" {...props} />,
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default AppRouter;

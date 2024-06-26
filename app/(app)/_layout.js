import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from '../../hooks/useColorScheme';
import { TabBarIcon } from '../../components/navigation/TabBarIcon';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  // Her bir sekme için ortak bir tabBarIcon fonksiyonu
  const renderTabBarIcon = (name, focused, color) => (
    <TabBarIcon name={focused ? name : `${name}-outline`} color={color} />
  );

  return (
    <Tabs>
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon('browse', focused, color),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon('home', focused, color),
        }}
      />

      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil', // Türkçe olarak "Profil"
          tabBarIcon: ({ color, focused }) => renderTabBarIcon('profil', focused, color),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

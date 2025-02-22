import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="vitals"/>
      <Tabs.Screen name="ai_response"/>
      <Tabs.Screen name="profile"/>
    </Tabs>
  );
}
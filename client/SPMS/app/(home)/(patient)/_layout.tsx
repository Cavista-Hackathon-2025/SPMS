import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="vitals"/>
      <Tabs.Screen name="patient"/>
      <Tabs.Screen name="ai_response"/>
    </Tabs>
  );
}
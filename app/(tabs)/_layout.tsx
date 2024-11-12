import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#01579b', // Dark blue for active tab (same as Input screen title)
        tabBarInactiveTintColor: '#a0a0a0', // Light gray for inactive tab (similar to Input placeholders)
        tabBarStyle: {
          backgroundColor: '#f0f4f8', // Very light gray-blue background (same as Input screen)
        },
      }}
    >
      <Tabs.Screen
        name="input"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} /> // Add circle icon for "input"
          ),
          tabBarLabel: 'Tambah',
        }}
      />
      <Tabs.Screen
        name="produk"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} /> // Shopping cart icon for "produk"
          ),
          tabBarLabel: 'Produk',
        }}
      />
    </Tabs>
  );
};

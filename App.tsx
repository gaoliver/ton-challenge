import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
        <Navigation />
    </SafeAreaProvider>
  );
}

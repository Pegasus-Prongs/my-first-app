import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        {/* <Stack.Screen name="index" options={{ title: "Splash" }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}

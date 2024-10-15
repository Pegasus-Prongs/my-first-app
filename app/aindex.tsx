// app/splash.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

const SplashScreenComponent = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10; // Increase progress
        setLoadingProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 300); // Change this value for faster/slower loading

      // Simulate loading completion
      setTimeout(async () => {
        await SplashScreen.hideAsync(); // Hide the splash screen
        router.replace('(tabs)/index'); // Navigate to the home screen
      }, 4000); // Total loading time (adjust if necessary)
    }

    prepare();
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/react-logo.png')} style={styles.logo} /> 
       <Text style={styles.title}>Welcome to My App</Text>
      <ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />
      <Text style={styles.loadingText}>{loadingProgress}% Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee', // Your splash screen background color
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  spinner: {
    marginTop: 20,
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
});

export default SplashScreenComponent;
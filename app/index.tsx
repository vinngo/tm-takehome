import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function LandingScreen() {
  const colorScheme = useColorScheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSignIn = () => {
    router.push('/(auth)/sign-in');
  };

  if (!isLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        entering={FadeIn.duration(800)} 
        style={styles.content}
      >
        <View style={styles.logoContainer}>
          <View
            style={[styles.logo, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}
          >
            <IconSymbol
              name="star.fill"
              size={40}
              color="#FFFFFF"
            />
          </View>
        </View>
        
        <View style={styles.welcomeContainer}>
          <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
            Welcome
          </Text>
          <Text style={[styles.subtitle, { color: Colors[colorScheme ?? 'light'].textDim }]}>
            Sign in to get started with your journey
          </Text>
        </View>
        
        <Pressable 
          style={({ pressed }) => [
            styles.signInButton,
            { backgroundColor: Colors[colorScheme ?? 'light'].tint },
            pressed && styles.buttonPressed
          ]}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
          <IconSymbol name="arrow.right" size={18} color="#FFFFFF" />
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 30,
    lineHeight: 22,
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
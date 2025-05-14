import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SignInScreen() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      // Simple validation
      return;
    }

    setIsLoading(true);
    
    try {
      // Mock authentication - in a real app, call your auth service here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to the main app after successful sign in
      router.replace('/(app)');
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <Animated.View 
          entering={FadeIn.duration(400)} 
          style={styles.content}
        >
          <Pressable 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <IconSymbol 
              name="arrow.left" 
              size={22} 
              color={Colors[colorScheme ?? 'light'].text} 
            />
          </Pressable>
          
          <View style={styles.header}>
            <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
              Sign In
            </Text>
            <Text style={[styles.subtitle, { color: Colors[colorScheme ?? 'light'].textDim }]}>
              Welcome back! Please enter your details
            </Text>
          </View>
          
          <View style={styles.form}>
            <View style={[
              styles.inputContainer,
              { backgroundColor: Colors[colorScheme ?? 'light'].cardBackground }
            ]}>
              <Text style={[styles.inputLabel, { color: Colors[colorScheme ?? 'light'].textDim }]}>
                Email
              </Text>
              <TextInput
                style={[styles.input, { color: Colors[colorScheme ?? 'light'].text }]}
                placeholder="Enter your email"
                placeholderTextColor={Colors[colorScheme ?? 'light'].textDimmer}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
              />
            </View>
            
            <View style={[
              styles.inputContainer,
              { backgroundColor: Colors[colorScheme ?? 'light'].cardBackground }
            ]}>
              <Text style={[styles.inputLabel, { color: Colors[colorScheme ?? 'light'].textDim }]}>
                Password
              </Text>
              <TextInput
                style={[styles.input, { color: Colors[colorScheme ?? 'light'].text }]}
                placeholder="Enter your password"
                placeholderTextColor={Colors[colorScheme ?? 'light'].textDimmer}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                returnKeyType="done"
              />
            </View>
            
            <Pressable
              style={({ pressed }) => [
                styles.signInButton,
                { backgroundColor: Colors[colorScheme ?? 'light'].tint },
                pressed && styles.buttonPressed,
                isLoading && styles.buttonDisabled
              ]}
              onPress={handleSignIn}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    borderRadius: 16,
    padding: 16,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    paddingVertical: 4,
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
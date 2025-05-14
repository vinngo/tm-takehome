import { Stack } from 'expo-router';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet } from 'react-native';

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.container}>
      <BlurView 
        intensity={colorScheme === 'dark' ? 40 : 60}
        tint={colorScheme === 'dark' ? 'dark' : 'light'}
        style={StyleSheet.absoluteFill} 
      />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
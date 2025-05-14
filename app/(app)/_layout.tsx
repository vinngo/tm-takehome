import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AppLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
      }}
    />
  );
}
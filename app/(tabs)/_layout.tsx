// app/(tabs)/_layout.tsx
import { Stack } from 'expo-router';
import { Redirect } from 'expo-router';
import CustomTabBar from '@/components/ui/CustomTabBar';

export default function TabLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Accueil" />
        <Stack.Screen name="explore" />
        <Stack.Screen name="Map" />
        <Stack.Screen name="Notification" />
        <Stack.Screen name="Historique" />
        <Stack.Screen name="Connexion" />
        <Stack.Screen name="inscription" />
        <Stack.Screen name="ProfilSante" />
      </Stack>
      <CustomTabBar />
    </>
  );
}
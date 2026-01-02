// components/CustomTabBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import { Colors } from '@/styles/colors';

const tabs = [
  { id: 'Parametres', icon: 'settings', iconOutline: 'settings-outline', route: '/(tabs)/Parametres' },
  { id: 'Conseil', icon: 'bulb', iconOutline: 'bulb-outline', route: '/(tabs)/ConseilPage' },
  { id: 'home', icon: 'home', iconOutline: 'home-outline', route: '/(tabs)/Accueil' }, // ✅ Pointe vers Accueil
  { id: 'notification', icon: 'notifications', iconOutline: 'notifications-outline', route: '/(tabs)/Notification' },
  { id: 'history', icon: 'time', iconOutline: 'time-outline', route: '/(tabs)/Historique' },
];

export default function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();
  
  // ✅ Fonction manquante ajoutée
  const getActiveIndex = () => {
    if (pathname === '/' || pathname === '/(tabs)' || pathname.includes('Accueil')) return 2; // Home
    if (pathname.includes('Parametres')) return 0;
    if (pathname.includes('ConseilPage')) return 1;
    if (pathname.includes('Notification')) return 3;
    if (pathname.includes('Historique')) return 4;
    return 2; // Par défaut Home
  };

  const activeIndex = getActiveIndex();

  // Réorganiser les tabs pour mettre l'actif au centre
  const getOrderedTabs = () => {
    const ordered = [...tabs];
    const active = ordered[activeIndex];
    
    // Diviser les autres en deux groupes
    const leftCount = 2; // Toujours 2 à gauche
    const left = [];
    const right = [];
    
    // Ajouter 2 éléments à gauche
    let leftIndex = activeIndex - 1;
    for (let i = 0; i < leftCount; i++) {
      if (leftIndex < 0) leftIndex = tabs.length - 1;
      left.unshift(tabs[leftIndex]);
      leftIndex--;
    }
    
    // Ajouter 2 éléments à droite
    let rightIndex = activeIndex + 1;
    for (let i = 0; i < 2; i++) {
      if (rightIndex >= tabs.length) rightIndex = 0;
      right.push(tabs[rightIndex]);
      rightIndex++;
    }
    
    return [...left, active, ...right];
  };

  const orderedTabs = getOrderedTabs();
  const centerIndex = 2; // Toujours au centre (index 2 sur 5 éléments)

  const handlePress = (route: string) => {
    console.log('Route cliquée:', route);
    console.log('Pathname actuel:', pathname);
    
    if (route.includes('Parametres')) {
      router.push('/(tabs)/Parametres');
    } else if (route.includes('ConseilPage')) {
      router.push('/(tabs)/ConseilPage');
    } else if (route.includes('Notification')) {
      router.push('/(tabs)/Notification');
    } else if (route.includes('Historique')) {
      router.push('/(tabs)/Historique');
    } else if (route.includes('Accueil')) {
      router.push('/(tabs)/Accueil'); // ✅ Navigation vers Accueil
    } else {
      router.push('/(tabs)/Accueil');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {orderedTabs.map((tab, index) => {
          const isCenter = index === centerIndex;

          return (
            <TouchableOpacity
              key={`${tab.id}-${index}`}
              style={[styles.tab, isCenter && styles.centerTab]}
              onPress={() => handlePress(tab.route)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  isCenter && styles.activeIconContainer,
                ]}
              >
                <Ionicons
                  name={isCenter ? tab.icon : tab.iconOutline}
                  size={isCenter ? 32 : 24}
                  color={isCenter ? '#fff' : '#9CA3AF'}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tabBar: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTab: {
    marginTop: -25,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
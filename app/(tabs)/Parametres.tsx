// app/(tabs)/parametres.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from "@/components/ui/Header";
import { Colors } from '@/styles/colors';
import { ParametresStyles } from '@/styles/screens/parametres';
import { router } from 'expo-router';

export default function Parametres() {
  const MenuItem = ({ label, icon , onPress }: { label: string; icon?: any ; onPress?:() =>void }) => (
    <TouchableOpacity style={ParametresStyles.menuItem} onPress={onPress} > 
      <View style={ParametresStyles.menuItemLeft}>
        {icon && <Ionicons name={icon} size={20} color="#666" style={ParametresStyles.menuIcon} />}
        <Text style={ParametresStyles.menuItemText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
    </TouchableOpacity>
  );

  return (
    <View style={ParametresStyles.container}>
      

      

      <ScrollView 
        style={ParametresStyles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ParametresStyles.scrollContent}
      >
        <Header title="Paramètres" />
        <View style={ParametresStyles.section}>
          <Text style={ParametresStyles.sectionTitle}>Compte</Text>
          <MenuItem label="Informations du compte" icon="person-outline" />

<MenuItem 
  label="Profil santé" 
  icon="medical-outline" 
  onPress={() => router.push('/(tabs)/ProfilSante')}
/>
        </View>

        {/* Section Notifications */}
        <View style={ParametresStyles.section}>
          <Text style={ParametresStyles.sectionTitle}>Notifications</Text>
          <MenuItem label="Notifications push" icon="notifications-outline" />
          <MenuItem label="Rappels de rendez-vous" icon="calendar-outline" />
          <MenuItem label="Alertes santé" icon="alert-circle-outline" />
        </View>

        {/* Section Assistance */}
        <View style={ParametresStyles.section}>
          <Text style={ParametresStyles.sectionTitle}>Assistance et informations</Text>
          <MenuItem label="Centre d'aide" icon="help-circle-outline" />
          <MenuItem label="Conditions d'utilisation" icon="document-text-outline" />
          <MenuItem label="Politique de confidentialité" icon="shield-checkmark-outline" />
        </View>

        {/* Section Connexion */}
        <View style={ParametresStyles.section}>
          <Text style={ParametresStyles.sectionTitle}>Connexion</Text>
          <MenuItem label="Changer le mot de passe" icon="lock-closed-outline" />
          <MenuItem label="Se déconnecter" icon="log-out-outline" />
        </View>
      </ScrollView>
    </View>
  );
}


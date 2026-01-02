import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ConseilPageStyles } from '@/styles/screens/conseilpage';

export default function ConseilPage() {
  return (
    <View style={ConseilPageStyles.container}>
      {/* Header simple comme dans Accueil */}
      <View style={ConseilPageStyles.header}>
        <TouchableOpacity style={ConseilPageStyles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={ConseilPageStyles.headerTitle}>Conseils de santé</Text>
      </View>

      <ScrollView 
        style={ConseilPageStyles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ConseilPageStyles.scrollContent}
      >
        {/* Card 1 - Style similaire à carte1 de Accueil */}
        <View style={ConseilPageStyles.carte1}>
          <View style={ConseilPageStyles.cardHeader}>
            <Ionicons name="person-outline" size={28} color="#000" />
            <Text style={ConseilPageStyles.cardTitle}>Recommandations personnelles</Text>
          </View>
          
          <View style={ConseilPageStyles.cardContent}>
            <View style={ConseilPageStyles.bulletItem}>
              <View style={ConseilPageStyles.bullet} />
              <Text style={ConseilPageStyles.bulletText}>
                Consultez le tableau de bord pour suivre votre exposition individuelle.
              </Text>
            </View>
            <View style={ConseilPageStyles.bulletItem}>
              <View style={ConseilPageStyles.bullet} />
              <Text style={ConseilPageStyles.bulletText}>
                Suivez les recommandations de l'IA pour réduire votre risque respiratoire.
              </Text>
            </View>
            <View style={ConseilPageStyles.bulletItem}>
              <View style={ConseilPageStyles.bullet} />
              <Text style={ConseilPageStyles.bulletText}>
                Participez aux initiatives locales pour améliorer la qualité de l'air.
              </Text>
            </View>
          </View>
        </View>

        {/* Card 2 - Style carte2/carte3 */}
        <View style={ConseilPageStyles.carteRow}>
          <View style={ConseilPageStyles.carte2}>
            <View style={ConseilPageStyles.iconContainer}>
              <Ionicons name="shield-checkmark" size={45} color="#38B6FF" />
            </View>
            <Text style={ConseilPageStyles.carte2Title}>Prévention quotidienne</Text>
            <View style={ConseilPageStyles.miniList}>
              <Text style={ConseilPageStyles.miniText}>• Vérifiez la qualité de l'air</Text>
              <Text style={ConseilPageStyles.miniText}>• Portez un masque si nécessaire</Text>
              <Text style={ConseilPageStyles.miniText}>• Aérez tôt le matin</Text>
            </View>
          </View>

          <View style={ConseilPageStyles.carte3}>
            <View style={ConseilPageStyles.iconContainer}>
              <Ionicons name="heart" size={45} color="#38B6FF" />
            </View>
            <Text style={ConseilPageStyles.carte3Title}>Bien-être respiratoire</Text>
            <View style={ConseilPageStyles.miniList}>
              <Text style={ConseilPageStyles.miniText}>• Exercices de respiration</Text>
              <Text style={ConseilPageStyles.miniText}>• Hydratation régulière</Text>
              <Text style={ConseilPageStyles.miniText}>• Activité physique modérée</Text>
            </View>
          </View>
        </View>

        {/* Card 4 - Style carte4 */}
        <View style={ConseilPageStyles.carte4}>
          <View style={ConseilPageStyles.carte4Content}>
            <View style={ConseilPageStyles.iconBig}>
              <Ionicons name="medical" size={35} color="#38B6FF" />
            </View>
            <View style={ConseilPageStyles.carte4Text}>
              <Text style={ConseilPageStyles.carte4Title}>Alertes pollution</Text>
              <Text style={ConseilPageStyles.carte4Subtitle}>
                Évitez les exercices intenses pendant les pics de pollution
              </Text>
            </View>
          </View>
        </View>

        {/* Card info supplémentaire */}
        <View style={ConseilPageStyles.carteInfo}>
          <Ionicons name="information-circle" size={24} color="#38B6FF" />
          <Text style={ConseilPageStyles.infoText}>
            Consultez régulièrement cette page pour des conseils adaptés à votre profil et à la qualité de l'air actuelle.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}


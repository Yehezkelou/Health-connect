import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from "@/components/ui/Header";
import { tempsexposition } from '@/styles/screens/tempsexposition';

export default function TempsExposition() {
  const [pollutionData] = useState({
    particules: { time: '2 minutes', color: '#FFD93D', level: 'Faible' },
    co2: { time: '2 heures', color: '#FF6B6B', level: 'Modéré' },
    gaztoxique: { time: '5 secondes', color: '#A8E6A1', level: 'Très faible' }
  });

  const [expositionData] = useState({
    today: { hours: 2, minutes: 45 },
    week: { total: '18h 30min', average: '2h 38min' }
  });

  return (
    <View style={tempsexposition.container}>
      

      <ScrollView 
        style={tempsexposition.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tempsexposition.scrollContent}
      >
        <Header title="Temps d'exposition" />
        {/* Illustration centrale */}
        <View style={tempsexposition.illustrationContainer}>
          <View style={tempsexposition.earthContainer}>
            <View style={tempsexposition.earthOuter}>
              <View style={tempsexposition.earthInner}>
                <Text style={tempsexposition.earthEmoji}>🌍</Text>
              </View>
            </View>
            {/* Particules flottantes */}
            <View style={[tempsexposition.particle, tempsexposition.particle1]} />
            <View style={[tempsexposition.particle, tempsexposition.particle2]} />
            <View style={[tempsexposition.particle, tempsexposition.particle3]} />
          </View>
        </View>

        {/* Indicateurs de pollution en temps réel */}
        <View style={tempsexposition.pollutionSection}>
          {/* Particules fines */}
          <View style={tempsexposition.pollutionCard}>
            <View style={tempsexposition.pollutionInfo}>
              <Text style={tempsexposition.pollutionTitle}>Particules fines</Text>
              <Text style={tempsexposition.pollutionTime}>{pollutionData.particules.time}</Text>
            </View>
            <View style={tempsexposition.pollutionRight}>
              <View style={tempsexposition.levelBadge}>
                <Text style={tempsexposition.levelText}>{pollutionData.particules.level}</Text>
              </View>
              <View style={[tempsexposition.pollutionCircle, { backgroundColor: pollutionData.particules.color }]} />
            </View>
          </View>

          {/* CO2 */}
          <View style={tempsexposition.pollutionCard}>
            <View style={tempsexposition.pollutionInfo}>
              <Text style={tempsexposition.pollutionTitle}>CO2</Text>
              <Text style={tempsexposition.pollutionTime}>{pollutionData.co2.time}</Text>
            </View>
            <View style={tempsexposition.pollutionRight}>
              <View style={tempsexposition.levelBadge}>
                <Text style={tempsexposition.levelText}>{pollutionData.co2.level}</Text>
              </View>
              <View style={[tempsexposition.pollutionCircle, { backgroundColor: pollutionData.co2.color }]} />
            </View>
          </View>

          {/* Gaz toxique */}
          <View style={tempsexposition.pollutionCard}>
            <View style={tempsexposition.pollutionInfo}>
              <Text style={tempsexposition.pollutionTitle}>Gaz toxique</Text>
              <Text style={tempsexposition.pollutionTime}>{pollutionData.gaztoxique.time}</Text>
            </View>
            <View style={tempsexposition.pollutionRight}>
              <View style={tempsexposition.levelBadge}>
                <Text style={tempsexposition.levelText}>{pollutionData.gaztoxique.level}</Text>
              </View>
              <View style={[tempsexposition.pollutionCircle, { backgroundColor: pollutionData.gaztoxique.color }]} />
            </View>
          </View>
        </View>

        {/* Cartes d'exposition */}
        <View style={tempsexposition.expositionSection}>
          {/* Aujourd'hui */}
          <View style={tempsexposition.expositionCard}>
            <View style={tempsexposition.cardHeader}>
              <Ionicons name="time-outline" size={20} color="#fff" />
              <Text style={tempsexposition.expositionCardTitle}>Aujourd'hui</Text>
            </View>
            <Text style={tempsexposition.expositionTime}>
              {expositionData.today.hours}h {expositionData.today.minutes}min
            </Text>
            <Text style={tempsexposition.expositionSubtitle}>Exposition totale</Text>
          </View>

          {/* Cette semaine */}
          <View style={tempsexposition.expositionCard}>
            <View style={tempsexposition.cardHeader}>
              <Ionicons name="trending-up-outline" size={20} color="#fff" />
              <Text style={tempsexposition.expositionCardTitle}>Cette semaine</Text>
            </View>
            <Text style={tempsexposition.expositionTime}>{expositionData.week.total}</Text>
            <Text style={tempsexposition.expositionSubtitle}>
              Moyenne quotidienne: {expositionData.week.average}
            </Text>
          </View>
        </View>

        {/* Info box */}
        <View style={tempsexposition.infoBox}>
          <Ionicons name="information-circle" size={24} color="#3B82F6" style={tempsexposition.infoIcon} />
          <Text style={tempsexposition.infoText}>
            Limitez votre exposition à moins de 3h par jour pour préserver votre santé respiratoire.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

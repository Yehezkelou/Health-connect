import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Polygon } from 'react-native-svg';
import Header from "@/components/ui/Header";
import { AccueilStyles } from '@/styles/screens/accueil';
import { Colors } from '@/styles/colors';


export default function Accueil() {
  const [name, setName] = useState("DAGOU Abe Jean Christ");
  const [temp, setTemp] = useState("25°");

    const handleNavigateToStations = () => {
    router.push('/(tabs)/Map');
  };
    const handleNavigateToExpoitionTime = () => {
    router.push('/(tabs)/TempsExposition');
  };
  return (
    <View style={AccueilStyles.container}>
      <Header title="Hello" />
      
      <Ionicons 
        style={AccueilStyles.icon1} 
        name="person-circle" 
        size={45.5} 
        color="#38B6FF" 
      />
      <Text style={AccueilStyles.nom}>{name}</Text>

      {/* Carte qualité de l'air */}
      <View style={AccueilStyles.carte1}>
        <Text style={AccueilStyles.textecarte1}>
          Qualité de l'air près de vous
        </Text>
        
        <View style={AccueilStyles.gaugeContainer}>
          <Image 
            source={require('@/assets/images/gauge.png')} 
            style={AccueilStyles.gaugeImage}
            resizeMode="contain"
          />
          <Svg style={AccueilStyles.aiguille}>
            <Polygon 
              points="50,0 43,80 57,80" 
              fill="black"
              origin="50,50" 
              rotation={-55}  
            />
          </Svg>
          <Text style={AccueilStyles.gaugeLabel}>OPTIMALE</Text>
        </View>

        <Ionicons 
          style={AccueilStyles.icon2} 
          name="thermometer-outline" 
          size={30} 
        />
        <Text style={AccueilStyles.temp}>{temp}</Text>
      </View>

      {/* Carte temps d'exposition */}
      <TouchableOpacity 
        style={AccueilStyles.carte2}
        onPress={handleNavigateToExpoitionTime}
        activeOpacity={0.7}
      > 
        <Ionicons 
          style={AccueilStyles.icon3} 
          name="time" 
          size={45} 
          color="#38B6FF" 
        />
        <Text style={AccueilStyles.carte2Texte}>temps d'exposition</Text>
            </TouchableOpacity>


      {/* Carte stations */}
      <TouchableOpacity 
        style={AccueilStyles.carte3}
        onPress={handleNavigateToStations}
        activeOpacity={0.7}
      > 
      
        <Ionicons 
          style={AccueilStyles.icon4} 
          name="location-sharp" 
          size={45} 
          color="#38B6FF" 
        />
        <Text style={AccueilStyles.carte3Texte}>Stations</Text>
      
      </TouchableOpacity>

      {/* Carte scanner */}
      <View style={AccueilStyles.carte4}>
        <Ionicons 
          style={AccueilStyles.icon5} 
          name="search" 
          size={35} 
          color={Colors.primary} 
        />
        <Text style={AccueilStyles.carte4Texte}>Scanner la zone</Text>   
      </View>
    </View>
  );
}
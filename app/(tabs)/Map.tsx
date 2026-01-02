import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Header from "@/components/ui/Header";
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { MapStyles } from '@/styles/screens/map';

const { width, height } = Dimensions.get('window');

function Map() {
  return (
    <View style={MapStyles.container}>
      <Header title="HEALTH CONNECT" />
      
      {/* Conteneur de la Map */}
      <View style={MapStyles.mapContainer}>
        <MapView
          style={MapStyles.map}
          userInterfaceStyle="light"
        />

        {/* Bouton de localisation en haut à droite */}
        <TouchableOpacity style={MapStyles.locationButton} onPress={() => console.log('Action itinéraire')}>
          <Ionicons name="location" size={16} color="#3B82F6" style={MapStyles.locationIcon1} />
          <Ionicons name="location" size={20} color="#3B82F6" style={MapStyles.locationIcon2} />
          <View style={MapStyles.routeLine} />
        </TouchableOpacity>

        {/* Carte de légende superposée */}
        <View style={MapStyles.legendCard}>
          {/* Item 1 - Balises bleues */}
          <View style={MapStyles.legendItem}>
            <View style={MapStyles.iconContainer}>
              <Ionicons name="location" size={18} color="#3B82F6" />
            </View>
            <Text style={MapStyles.legendText}>
              Les balises en bleus représentent les stations
            </Text>
          </View>

          {/* Item 2 - Zones bleues */}
          <View style={[MapStyles.legendItem, MapStyles.boxItem]}>
            <View style={[MapStyles.colorBox, { backgroundColor: '#60A5FA' }]} />
            <Text style={MapStyles.legendText}>
              Les zones en bleu représentent les chemins sûrs
            </Text>
          </View>

          {/* Item 3 - Zones oranges */}
          <View style={[MapStyles.legendItem, MapStyles.boxItem]}>
            <View style={[MapStyles.colorBox, { backgroundColor: '#FBBF24' }]} />
            <Text style={MapStyles.legendText}>
              Les zones en orange représentent les chemins moins pollués
            </Text>
          </View>

          {/* Item 4 - Zones rouges */}
          <View style={[MapStyles.legendItem, MapStyles.boxItem]}>
            <View style={[MapStyles.colorBox, { backgroundColor: '#F87171' }]} />
            <Text style={MapStyles.legendText}>
              Les zones en rouge représentent les chemins à éviter
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Map;


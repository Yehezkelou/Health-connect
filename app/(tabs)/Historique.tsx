import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Header from "@/components/ui/Header";
import React from 'react';
import { HistoriqueStyles } from '@/styles/screens/historique';

const historyData = [
  {
    id: 1,
    date: "22 decembre 2025",
    items: [
      {
        id: 1,
        text: "Vous avez été exposer au CO₂ pendant 2 heures",
        route: "Treinchville,gare de bassam,rue 15"
      }
    ]
  },
  {
    id: 2,
    date: "15 novembre 2026",
    items: [
      {
        id: 1,
        text: "Vous avez été exposer au CO₂ pendant 2 heures",
        route: "Treinchville,gare de bassam,rue 15"
      },
      {
        id: 2,
        text: "Vous avez été exposer au CO₂ pendant 2 heures",
        route: "Treinchville,gare de bassam,rue 15"
      },
      {
        id: 3,
        text: "Vous avez été exposer au CO₂ pendant 2 heures",
        route: "Treinchville,gare de bassam,rue 15"
      }
    ]
  },
  {
    id: 3,
    date: "15 septembre 2026",
    items: [
      {
        id: 1,
        text: "Vous avez été exposer au CO₂ pendant 2 heures",
        route: "Treinchville,gare de bassam,rue 15"
      }
    ]
  },
  {
    id: 4,
    date: "15 août 2026",
    items: [
      {
        id: 1,
        text: "Vous avez été exposer au CO₂ pendant 2 heures",
        route: "Treinchville,gare de bassam,rue 15"
      }
    ]
  }
];

export default function History() {
  return (
     <ScrollView style={HistoriqueStyles.scrollView} showsVerticalScrollIndicator={false}>
    <View style={HistoriqueStyles.container}>
      <Header title="HEALTH CONNECT" />
      
      
      <View style={HistoriqueStyles.titleContainer}>
        <Text style={HistoriqueStyles.title}>Historique</Text>
      </View>

      
     
        {historyData.map((section) => (
          <View key={section.id} style={HistoriqueStyles.section}>
            
            <Text style={HistoriqueStyles.dateText}>{section.date}</Text>

           
            {section.items.map((item) => (
              <View key={item.id} style={HistoriqueStyles.card}>
                <View style={HistoriqueStyles.cardContent}>
                  <Text style={HistoriqueStyles.exposureText}>{item.text}</Text>
                  
                  <View style={HistoriqueStyles.routeContainer}>
                    <Ionicons name="location-outline" size={16} color="#00B4D8" />
                    <Text style={HistoriqueStyles.routeText}>{item.route}</Text>
                  </View>
                </View>

                <TouchableOpacity style={HistoriqueStyles.button}>
                  <Text style={HistoriqueStyles.buttonText}>Voir plus</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
        </View>
      </ScrollView>
    
  );
}


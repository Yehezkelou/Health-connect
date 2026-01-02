import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
import ChampTexte from "@/components/ui/ChampTexte";
import { profilSanteStyles } from '@/styles/screens/profilsante';
import { Colors } from '@/styles/colors';
import Header from "@/components/ui/Header";


export default function ProfilSante() {
  const [age, setAge] = useState('');
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  const [asthme, setAsthme] = useState(false);
  const [fumeur, setFumeur] = useState(false);
  const [allergies, setAllergies] = useState('');
  const [maladiesRespiratoires, setMaladiesRespiratoires] = useState('');

  const handleSubmit = () => {
    console.log({
      age,
      poids,
      taille,
      asthme,
      fumeur,
      allergies,
      maladiesRespiratoires
    });
    // Traiter les données du formulaire
  };

  return (
    <View style={profilSanteStyles.container}>
      
      <TouchableOpacity 
        onPress={() => router.back()} 
        style={profilSanteStyles.backButton}
      >
        <Ionicons name="arrow-back" size={28} color="#000000ff" />
      </TouchableOpacity>

      <ScrollView 

        style={profilSanteStyles.scrollView}
        contentContainerStyle={profilSanteStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Profil Santé" />
        {/* Informations physiques */}
        <View style={profilSanteStyles.section}>
          <Text style={profilSanteStyles.sectionTitle}>Informations physiques</Text>
          
          <ChampTexte 
            style={profilSanteStyles.input}
            placeholder="Âge"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />

          <ChampTexte 
            style={profilSanteStyles.input}
            placeholder="Poids (kg)"
            keyboardType="numeric"
            value={poids}
            onChangeText={setPoids}
          />

          <ChampTexte 
            style={profilSanteStyles.input}
            placeholder="Taille (cm)"
            keyboardType="numeric"
            value={taille}
            onChangeText={setTaille}
          />
        </View>

        {/* Conditions médicales */}
        <View style={profilSanteStyles.section}>
          <Text style={profilSanteStyles.sectionTitle}>Conditions médicales</Text>
          
          {/* Asthme */}
          <View style={profilSanteStyles.switchContainer}>
            <View style={profilSanteStyles.switchLabel}>
              <Ionicons name="fitness" size={24} color={Colors.primary} />
              <Text style={profilSanteStyles.switchText}>Asthme</Text>
            </View>
            <Switch
              value={asthme}
              onValueChange={setAsthme}
              trackColor={{ false: '#E0E0E0', true: Colors.primary }}
              thumbColor={asthme ? '#fff' : '#f4f4f4'}
            />
          </View>

          {/* Fumeur */}
          <View style={profilSanteStyles.switchContainer}>
            <View style={profilSanteStyles.switchLabel}>
              <Ionicons name="ban" size={24} color={Colors.primary} />
              <Text style={profilSanteStyles.switchText}>Fumeur</Text>
            </View>
            <Switch
              value={fumeur}
              onValueChange={setFumeur}
              trackColor={{ false: '#E0E0E0', true: Colors.primary }}
              thumbColor={fumeur ? '#fff' : '#f4f4f4'}
            />
          </View>
        </View>

        {/* Allergies et maladies */}
        <View style={profilSanteStyles.section}>
          <Text style={profilSanteStyles.sectionTitle}>Allergies et maladies</Text>
          
          <Text style={profilSanteStyles.label}>Allergies connues</Text>
          <ChampTexte 
            style={profilSanteStyles.textArea}
            placeholder="Ex: Pollen, acariens, poussière..."
            multiline
            numberOfLines={4}
            value={allergies}
            onChangeText={setAllergies}
          />

          <Text style={profilSanteStyles.label}>Maladies respiratoires</Text>
          <ChampTexte 
            style={profilSanteStyles.textArea}
            placeholder="Ex: Bronchite chronique, BPCO..."
            multiline
            numberOfLines={4}
            value={maladiesRespiratoires}
            onChangeText={setMaladiesRespiratoires}
          />
        </View>

        <Button 
          title="Enregistrer" 
          onPress={handleSubmit}
          buttonStyle={profilSanteStyles.button}
        />
      </ScrollView>
    </View>
  );
}
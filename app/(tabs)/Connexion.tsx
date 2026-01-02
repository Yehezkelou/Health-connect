import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
import { ConnexionStyles } from '@/styles/screens/connexion';
import ChampTexte  from "@/components/ui/ChampTexte";

export default function Connexion() {
  return (
    <View style={ConnexionStyles.container}>
      
      <TouchableOpacity onPress={() => router.back()} style={ConnexionStyles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#000000ff" />
      </TouchableOpacity>

      <Image source={require('@/assets/images/logo.png')} style={ConnexionStyles.logo}/>
      <Text style={ConnexionStyles.title}>CONNECTEZ VOUS</Text>
      <ChampTexte style={ConnexionStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"/>
      <ChampTexte style={ConnexionStyles.input}
      placeholder="Mot de passe"
      secureTextEntry
      autoCapitalize="none"

      />
      <Button 
        title="Inscription" 
        onPress={() => console.log('Cliqué!')}
        buttonStyle={ConnexionStyles.button}
      />
      <TouchableOpacity onPress={() => console.log('Lien cliqué!')}>
        <Text style={ConnexionStyles.lien}>
          Vous n'avez pas de  compte ? <Text style={ConnexionStyles.lien2}>Inscrivez vous</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}
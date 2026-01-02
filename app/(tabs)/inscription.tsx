import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
import { inscriptionStyles } from '@/styles/screens/inscription';
import ChampTexte  from "@/components/ui/ChampTexte";

export default function Inscription() {
  return (
    <View style={inscriptionStyles.container}>
      
      <TouchableOpacity onPress={() => router.back()} style={inscriptionStyles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#000000ff" />
      </TouchableOpacity>

      <Image source={require('@/assets/images/logo.png')} style={inscriptionStyles.logo}/>
      <Text style={inscriptionStyles.title}>CREER UN NOUVEAU COMPTE</Text>
      
      <ChampTexte style={inscriptionStyles.input}
        placeholder="Nom" 

      />
      <ChampTexte style={inscriptionStyles.input}
        placeholder="Prénom"

      />
      <ChampTexte style={inscriptionStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"

      />
      <ChampTexte style={inscriptionStyles.input}
      placeholder="Mot de passe"
      secureTextEntry
      autoCapitalize="none"

      />
       <ChampTexte style={inscriptionStyles.input}
       placeholder="Confirmer mot de passe"
       secureTextEntry
       autoCapitalize="none"

      />
      
      
    
      <Button 
        title="Inscription" 
        onPress={() => console.log('Cliqué!')}
        buttonStyle={inscriptionStyles.button}
      />
      
      <TouchableOpacity onPress={() => console.log('Lien cliqué!')}>
        <Text style={inscriptionStyles.lien}>
          Vous avez déjà un compte ? <Text style={inscriptionStyles.lien2}>Connectez vous</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}
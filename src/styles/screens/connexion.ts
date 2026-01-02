import { StyleSheet } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing, Radius } from '../espace';

export const ConnexionStyles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  
  },
  backText: {
    color: Colors.primary,
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'Baloo-Bold',
  },
  title: {
    fontSize: 28,
    color: '#000000ff',
    fontFamily: 'Baloo-Bold',
    top: 250,
    left:100,
  },
  logo: {
    width: 282,
    height: 282,
    position: 'absolute',
    right: 60,
    top: 50,
  },
  input: {
    marginTop: 20,
    left:38,
    top:252,
  
  },
  button: {
    
    left: 40,
    marginTop: 280,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Baloo-Bold',
  },
  lien: {
    fontFamily: 'Baloo-Bold',
    top: 5,
    left: 80,
    marginTop: 10,
  },
  lien2: {
    color: Colors.primary,
  },
});
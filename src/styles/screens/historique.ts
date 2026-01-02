import { StyleSheet } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing, Radius } from '../espace';

export const HistoriqueStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',

    
  },
  title: {
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Baloo-Bold',
    
  },
  scrollView: {
    flex: 1,
    paddingTop: 16,
    
  },
  section: {
    marginBottom: 24,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    fontFamily: 'Baloo-Bold',
    left:13,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    left:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    width:'95%'
  },
  cardContent: {
    marginBottom: 12,
  },
  exposureText: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 20,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  routeText: {
    fontSize: 13,
    color: Colors.primary,
    flex: 1,
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },

});
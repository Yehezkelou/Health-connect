import { StyleSheet } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing, Radius } from '../espace';

export const ParametresStyles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12,
    fontFamily: 'Baloo-Bold',

  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    
  },
  section: {
    marginTop: 60,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    fontFamily: 'Baloo-Bold',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
  },

});
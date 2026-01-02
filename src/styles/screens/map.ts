import { StyleSheet } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing, Radius } from '../espace';

export const MapStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  mapContainer: {
    flex: 1,
    width: 390,
    left: 11,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  locationButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 80,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  locationIcon1: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
  locationIcon2: {
    position: 'absolute',
    bottom: 8,
    left: 10,
  },
  routeLine: {
    position: 'absolute',
    width: 28,
    height: 1.5,
    backgroundColor: Colors.primary,
    transform: [{ rotate: '-45deg' }],
  },
  legendCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  boxItem: {
    backgroundColor: '#F0F9FF',
    padding: 10,
    borderRadius: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
  },
  legendText: {
    flex: 1,
    fontSize: 12,
    color: '#374151',
    lineHeight: 16,
  },

});
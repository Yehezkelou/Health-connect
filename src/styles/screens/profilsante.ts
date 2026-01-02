import { StyleSheet } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing, Radius } from '../espace';

export const profilSanteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    marginTop: 30,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: Colors.text.primary,
    fontFamily: Typography.fontFamily.bold,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 30,
    top:50,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.primary,
    marginBottom: 15,
    left:13
  },
  input: {
    marginBottom: 15,
    left:12,
    width:350

  },
  textArea: {
    marginBottom: 15,
    minHeight: 100,
    textAlignVertical: 'top',
    left:12,
    width:350,
  },
  label: {
    fontSize: 14,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.text.primary,
    marginBottom: 8,
    marginTop: 5,
    left:13,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background.secondary,
    padding: 15,
    borderRadius: Radius.md,
    marginBottom: 12,
    width:350,
    left:12,
  },
  switchLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 16,
    color: Colors.text.primary,
    marginLeft: 10,
    fontFamily: Typography.fontFamily.regular,
  },
  button: {
    marginTop: 120,
    marginBottom: 0,
    left:20
  },
});
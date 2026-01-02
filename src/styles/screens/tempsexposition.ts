import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../colors';
import { Typography } from '../police';
import { Spacing } from '../espace';

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  scrollContent: ViewStyle;
  illustrationContainer: ViewStyle;
  earthContainer: ViewStyle;
  earthOuter: ViewStyle;
  earthInner: ViewStyle;
  earthEmoji: TextStyle;
  particle: ViewStyle;
  particle1: ViewStyle;
  particle2: ViewStyle;
  particle3: ViewStyle;
  pollutionSection: ViewStyle;
  pollutionCard: ViewStyle;
  pollutionInfo: ViewStyle;
  pollutionTitle: TextStyle;
  pollutionTime: TextStyle;
  pollutionRight: ViewStyle;
  levelBadge: ViewStyle;
  levelText: TextStyle;
  pollutionCircle: ViewStyle;
  expositionSection: ViewStyle;
  expositionCard: ViewStyle;
  cardHeader: ViewStyle;
  expositionCardTitle: TextStyle;
  expositionTime: TextStyle;
  expositionSubtitle: TextStyle;
  infoBox: ViewStyle;
  infoIcon: TextStyle;
  infoText: TextStyle;
}

export const tempsexposition = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  content: {
    flex: 1,
    
  },
  scrollContent: {
    paddingHorizontal: Spacing.md + 4,
    paddingTop: Spacing.md + 4,
    paddingBottom: 120,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop:60,
  },
  earthContainer: {
    position: 'relative',
    width: 130,
    height: 130,
  },
  earthOuter: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  earthInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  earthEmoji: {
    fontSize: 50,
  },
  particle: {
    position: 'absolute',
    borderRadius: 50,
    opacity: 0.6,
  },
  particle1: {
    width: 24,
    height: 24,
    backgroundColor: '#FDE047',
    top: -8,
    right: -8,
  },
  particle2: {
    width: 16,
    height: 16,
    backgroundColor: '#FCA5A5',
    bottom: -8,
    left: -8,
  },
  particle3: {
    width: 20,
    height: 20,
    backgroundColor: '#86EFAC',
    top: '45%',
    right: -16,
  },
  pollutionSection: {
    marginBottom: Spacing.lg,
  },
  pollutionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: Spacing.md + 4,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  pollutionInfo: {
    flex: 1,
  },
  pollutionTitle: {
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  pollutionTime: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
  },
  pollutionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  levelBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    fontSize: Typography.fontSize.xs,
    color: '#4B5563',
    fontWeight: Typography.fontWeight.medium,
  },
  pollutionCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  expositionSection: {
    marginBottom: Spacing.lg,
  },
  expositionCard: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: Spacing.sm + 2,
  },
  expositionCardTitle: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: '#fff',
  },
  expositionTime: {
    fontSize: 48,
    fontWeight: Typography.fontWeight.bold,
    color: '#fff',
    marginBottom: Spacing.sm,
  },
  expositionSubtitle: {
    fontSize: Typography.fontSize.sm,
    color: '#E0F2FE',
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#DBEAFE',
    padding: Spacing.md + 4,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    alignItems: 'flex-start',
  },
  infoIcon: {
    marginRight: Spacing.sm + 2,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.primary,
    lineHeight: 20,
  },
});
import { StyleSheet } from "react-native";

// Common design tokens
export const colors = {
  primary: "#2196F3",
  secondary: "#666",
  success: "#388E3C",
  warning: "#F57C00",
  info: "#1976D2",
  error: "#D32F2F",
  background: "#FFFFFF",
  surface: "#F5F5F5",
  border: "#E0E0E0",
  textPrimary: "#000",
  textSecondary: "#666",
  textLight: "#999",
  // Chart colors
  chartBlue: "#0088FE",
  chartGreen: "#00C49F",
  chartYellow: "#FFBB28",
  chartOrange: "#FF8042",
  chartPurple: "#8884D8",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: "bold" as const,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600" as const,
    color: colors.textPrimary,
  },
  body: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  caption: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  small: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  pieDataName: {
    fontSize: 16,
    fontWeight: "500" as const,
    color: colors.textPrimary,
  },
  pieDataValue: {
    fontSize: 14,
    color: colors.textSecondary,
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    paddingBottom: 100,
  },
  title: {
    ...typography.title,
    marginBottom: spacing.xl,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  loadingText: {
    marginTop: spacing.sm,
    ...typography.body,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: "center",
    marginBottom: spacing.lg,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
  },
  retryButtonText: {
    ...typography.body,
    color: colors.background,
    fontWeight: "600",
  },
  sectionTitle: {
    ...typography.subtitle,
    marginBottom: spacing.lg,
  },
  statsContainer: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: "center",
  },
  statValue: {
    ...typography.statValue,
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.statLabel,
    textAlign: "center",
  },
  chartContainer: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  pieChartWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 220,
  },
  pieDataContainer: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  pieDataItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.sm,
  },
  colorIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: spacing.md,
  },
  pieDataText: {
    flex: 1,
  },
  pieDataName: {
    ...typography.pieDataName,
  },
  pieDataValue: {
    ...typography.pieDataValue,
    marginTop: spacing.xs,
  },
  lineChartWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 220,
  },
  lineChart: {
    paddingRight: spacing.sm,
  },
  lineChartScrollContainer: {
    alignItems: "center",
  },
  bottomSpacer: {
    height: 50,
  },
});

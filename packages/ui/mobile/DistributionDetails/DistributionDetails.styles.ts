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
  // Status colors
  statusPlanned: { backgroundColor: "#E3F2FD", color: "#1976D2" },
  statusCompleted: { backgroundColor: "#E8F5E8", color: "#388E3C" },
  statusInProgress: { backgroundColor: "#FFF3E0", color: "#F57C00" },
  statusPending: { backgroundColor: "#F5F5F5", color: "#616161" },
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
    fontSize: 18,
    fontWeight: "600" as const,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "700" as const,
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
  button: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600" as const,
  },
  detailLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: "500" as const,
  },
  detailValue: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: "600" as const,
  },
  beneficiaryName: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: "600" as const,
  },
  beneficiaryId: {
    fontSize: 14,
    color: colors.textSecondary,
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  backButtonText: {
    ...typography.button,
  },
  headerTitle: {
    ...typography.title,
    marginLeft: spacing.sm,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
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
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.medium,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  regionText: {
    ...typography.subtitle,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xl,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "600",
  },
  detailsGrid: {
    gap: spacing.lg,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
  },
  detailLabel: {
    ...typography.detailLabel,
  },
  detailValue: {
    ...typography.detailValue,
  },
  beneficiariesSection: {
    marginTop: spacing.sm,
  },
  sectionTitle: {
    ...typography.title,
    marginBottom: spacing.md,
  },
  beneficiariesList: {
    gap: spacing.sm,
  },
  beneficiaryItem: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  beneficiaryName: {
    ...typography.beneficiaryName,
    marginBottom: spacing.xs,
  },
  beneficiaryId: {
    ...typography.beneficiaryId,
  },
});

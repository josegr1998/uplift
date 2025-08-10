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
  // Status background colors
  infoBackground: "#E3F2FD",
  successBackground: "#E8F5E8",
  warningBackground: "#FFF3E0",
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
    fontSize: 24,
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
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.title,
    marginBottom: spacing.lg,
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
  filtersContainer: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    marginBottom: spacing.lg,
  },
  filterRow: {
    marginBottom: spacing.md,
  },
  filterLabel: {
    ...typography.caption,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  resultsText: {
    ...typography.caption,
    marginBottom: spacing.md,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: spacing.lg,
  },
  distributionItem: {
    backgroundColor: colors.background,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.medium,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  regionText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.md,
  },
  statusText: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: "600",
  },
  itemDetails: {
    gap: spacing.xs,
  },
  dateText: {
    ...typography.caption,
    color: colors.secondary,
  },
  beneficiariesText: {
    ...typography.caption,
    color: colors.secondary,
  },
  aidTypeText: {
    ...typography.caption,
    color: colors.secondary,
    fontStyle: "italic",
  },
  bottomSpacer: {
    height: 50,
  },
  filterToggleButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.lg,
  },
  filterToggleText: {
    ...typography.body,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  filterToggleIcon: {
    fontSize: 20,
    color: colors.secondary,
  },
});

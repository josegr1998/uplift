import { StyleSheet } from "react-native";
import { Theme } from "../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold" as const,
      color: theme.colors.textPrimary,
      marginBottom: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    loadingText: {
      marginTop: 8,
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error,
      textAlign: "center",
      marginBottom: 16,
    },
    retryButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
    },
    retryButtonText: {
      fontSize: 16,
      color: theme.colors.background,
      fontWeight: "600",
    },
    filtersContainer: {
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    filterRow: {
      marginBottom: 12,
    },
    filterLabel: {
      fontSize: 14,
      fontWeight: "600",
      marginBottom: 4,
      color: theme.colors.textSecondary,
    },
    resultsText: {
      fontSize: 14,
      marginBottom: 16,
      color: theme.colors.textSecondary,
    },
    list: {
      flex: 1,
    },
    listContent: {
      paddingBottom: 16,
    },
    distributionItem: {
      backgroundColor: theme.colors.background,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    itemHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    regionText: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.colors.textPrimary,
      flex: 1,
    },
    statusBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    statusText: {
      fontSize: 12,
      fontWeight: "600",
    },
    itemDetails: {
      gap: 4,
    },
    labelText: {
      fontSize: 14,
      fontWeight: "600",
    },
    dateText: {
      fontSize: 14,
    },
    beneficiariesText: {
      fontSize: 14,
    },
    aidTypeText: {
      fontSize: 14,
      fontStyle: "italic",
    },
    bottomSpacer: {
      height: 50,
    },
    filterToggleButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.border,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      marginBottom: 16,
    },
    filterToggleText: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.textSecondary,
    },
    filterToggleIcon: {
      fontSize: 20,
      color: theme.colors.primary,
    },
  });

import { StyleSheet } from "react-native";
import { Theme } from "../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: "column",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      position: "relative",
    },
    backButton: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      position: "absolute",
      left: 16,
      top: 12,
    },
    backButtonText: {
      fontSize: 16,
      color: theme.colors.primary,
      fontWeight: "600" as const,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "600" as const,
      color: theme.colors.textPrimary,
      marginBottom: 4,
      textAlign: "center",
    },
    distributionId: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      fontWeight: "500" as const,
      textAlign: "center",
    },
    content: {
      flex: 1,
      padding: 16,
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
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    regionText: {
      fontSize: 24,
      fontWeight: "700" as const,
      color: theme.colors.textPrimary,
      flex: 1,
    },
    statusBadge: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
    },
    statusText: {
      fontSize: 14,
      fontWeight: "600",
    },
    detailsGrid: {
      gap: 16,
    },
    detailItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.surface,
    },
    detailLabel: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      fontWeight: "500" as const,
    },
    detailValue: {
      fontSize: 16,
      color: theme.colors.textPrimary,
      fontWeight: "600" as const,
    },
    beneficiariesSection: {
      marginTop: 8,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600" as const,
      color: theme.colors.textPrimary,
      marginBottom: 12,
    },
    beneficiariesList: {
      gap: 8,
    },
    beneficiaryItem: {
      backgroundColor: theme.colors.surface,
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    beneficiaryName: {
      fontSize: 16,
      color: theme.colors.textPrimary,
      fontWeight: "600" as const,
      marginBottom: 4,
    },
    beneficiaryId: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
  });

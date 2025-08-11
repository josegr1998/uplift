import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
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
    dateText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    beneficiariesText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    aidTypeText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    labelText: {
      fontWeight: "500",
      color: theme.colors.textPrimary,
    },
  });

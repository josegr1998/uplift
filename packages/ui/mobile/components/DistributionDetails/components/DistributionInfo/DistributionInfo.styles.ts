import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
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
  });

import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
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
  });

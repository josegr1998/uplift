import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.background,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    button: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      backgroundColor: theme.colors.primary,
    },
    disabledButton: {
      backgroundColor: theme.colors.surface,
    },
    buttonText: {
      color: theme.colors.background,
      fontSize: 14,
      fontWeight: "600",
    },
    disabledButtonText: {
      color: theme.colors.textSecondary,
    },
    pageNumbers: {
      flexDirection: "row",
      alignItems: "center",
    },
    pageButton: {
      width: 36,
      height: 36,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 2,
      borderRadius: 18,
      backgroundColor: theme.colors.surface,
    },
    activePageButton: {
      backgroundColor: theme.colors.primary,
    },
    pageButtonText: {
      fontSize: 14,
      fontWeight: "600",
      color: theme.colors.textSecondary,
    },
    activePageButtonText: {
      color: theme.colors.background,
    },
    ellipsis: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginHorizontal: 4,
    },
  });

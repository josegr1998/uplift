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

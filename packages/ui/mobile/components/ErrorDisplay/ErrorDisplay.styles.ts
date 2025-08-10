import { StyleSheet } from "react-native";
import { Theme } from "../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: theme.typography.title.fontSize,
      fontWeight: theme.typography.title.fontWeight,
      color: theme.colors.error,
      textAlign: "center",
      marginBottom: theme.spacing.md,
    },
    message: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: "center",
      marginBottom: theme.spacing.lg,
      lineHeight: theme.typography.body.fontSize * 1.4,
    },
    retryButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.xl,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      shadowColor: theme.shadows.small.shadowColor,
      shadowOffset: theme.shadows.small.shadowOffset,
      shadowOpacity: theme.shadows.small.shadowOpacity,
      shadowRadius: theme.shadows.small.shadowRadius,
      elevation: theme.shadows.small.elevation,
    },
    retryButtonText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.white,
      fontWeight: "600",
      textAlign: "center",
    },
  });

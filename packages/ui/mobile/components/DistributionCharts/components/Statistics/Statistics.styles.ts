import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    statsContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600" as const,
      color: theme.colors.textPrimary,
      marginBottom: 16,
    },
    statsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    statCard: {
      width: "48%",
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
      padding: 12,
      marginBottom: 8,
      alignItems: "center",
    },
    statValue: {
      fontSize: 24,
      fontWeight: "bold" as const,
      color: theme.colors.primary,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      color: theme.colors.textSecondary,
      textAlign: "center",
    },
  });

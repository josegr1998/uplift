import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
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

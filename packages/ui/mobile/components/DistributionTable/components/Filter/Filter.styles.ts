import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    selector: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      minHeight: 44,
    },
    selectorText: {
      fontSize: 16,
      color: theme.colors.textPrimary,
      flex: 1,
    },
    placeholderText: {
      color: theme.colors.textSecondary,
    },
    arrow: {
      fontSize: 12,
      color: theme.colors.primary,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
      width: "80%",
      maxHeight: "70%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.colors.textPrimary,
    },
    closeButton: {
      fontSize: 20,
      color: theme.colors.textSecondary,
      padding: 4,
    },
    optionsList: {
      maxHeight: 300,
    },
    option: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.surface,
    },
    selectedOption: {
      backgroundColor: theme.colors.infoBackground,
    },
    optionText: {
      fontSize: 16,
      color: theme.colors.textPrimary,
    },
    selectedOptionText: {
      color: theme.colors.primary,
      fontWeight: "600",
    },
    checkmark: {
      fontSize: 16,
      color: theme.colors.primary,
      fontWeight: "bold",
    },
    clearButton: {
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
      alignItems: "center",
    },
    clearButtonText: {
      fontSize: 16,
      color: theme.colors.error,
      fontWeight: "600",
    },
  });

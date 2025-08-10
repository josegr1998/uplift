import { StyleSheet } from "react-native";
import { Theme } from "../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 200,
    },
    centered: {
      flex: 1,
      justifyContent: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.colors.textPrimary,
      marginBottom: 16,
      textAlign: "center",
    },
    message: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginTop: 16,
      textAlign: "center",
    },
  });

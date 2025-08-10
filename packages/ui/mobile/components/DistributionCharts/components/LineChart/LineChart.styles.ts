import { StyleSheet } from "react-native";
import { Theme } from "../../../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    chartContainer: {
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
    lineChartWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 220,
    },
    lineChart: {
      paddingRight: 8,
    },
    lineChartScrollContainer: {
      alignItems: "center",
    },
  });

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
    pieChartWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 220,
    },
    pieDataContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 16,
    },
    pieDataItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      width: "48%", // Leave some space between columns
    },
    colorIndicator: {
      width: 16,
      height: 16,
      borderRadius: 8,
      marginRight: 12,
    },
    pieDataText: {
      flex: 1,
    },
    pieDataName: {
      fontSize: 16,
      fontWeight: "500" as const,
      color: theme.colors.textPrimary,
    },
    pieDataValue: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginTop: 4,
    },
  });

// Chart-specific colors that don't need to be theme-dependent
export const chartColors = {
  chartBlue: "#0088FE",
  chartGreen: "#00C49F",
  chartYellow: "#FFBB28",
  chartOrange: "#FF8042",
  chartPurple: "#8884D8",
};

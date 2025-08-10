import { StyleSheet } from "react-native";
import { Theme } from "../../context/ThemeContext";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: 16,
      paddingBottom: 100,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold" as const,
      color: theme.colors.textPrimary,
      marginBottom: 24,
      textAlign: "center",
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    loadingText: {
      marginTop: 8,
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error,
      textAlign: "center",
      marginBottom: 16,
    },
    retryButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
    },
    retryButtonText: {
      fontSize: 16,
      color: theme.colors.background,
      fontWeight: "600",
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600" as const,
      color: theme.colors.textPrimary,
      marginBottom: 16,
    },
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
    pieChartWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 220,
    },
    pieDataContainer: {
      gap: 12,
      marginTop: 16,
    },
    pieDataItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
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
    bottomSpacer: {
      height: 50,
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

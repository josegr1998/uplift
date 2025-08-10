import React from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { ChartData } from "./DistributionCharts.types";
import { PieChart, LineChart } from "react-native-chart-kit";
import {
  createStyles,
  chartColors,
} from "./DistributionChartsPresentation.styles";
import { useTheme } from "../../context/ThemeContext";

export interface DistributionChartsPresentationProps {
  chartData: ChartData;
  isLoading: boolean;
  error: Error | null;
}

export const DistributionChartsPresentation = ({
  chartData,
  isLoading,
  error,
}: DistributionChartsPresentationProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading charts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error loading charts: {error.message}
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            Alert.alert("Retry", "Please refresh the screen to retry");
          }}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { pieData, lineData, summaryStats } = chartData;

  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: theme.colors.background,
    backgroundGradientTo: theme.colors.background,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 0,
    style: {
      borderRadius: 16,
    },
    propsForLabels: {
      fontSize: 10,
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: theme.colors.secondary,
    },
  };

  const pieChartData = pieData.map((item, index) => ({
    name: item.name,
    value: item.value,
    color: getColorForIndex(index),
    legendFontColor: "transparent",
    legendFontSize: 0,
  }));

  const lineChartData = {
    labels: lineData.map((item) => item.name),
    datasets: [
      {
        data: lineData.map((item) => item.beneficiaries),
        color: () => theme.colors.secondary,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Distribution Analytics</Text>

      {/* Summary Statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Summary Statistics</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, { color: theme.colors.primary }]}>
              {summaryStats.totalDistributions}
            </Text>
            <Text style={styles.statLabel}>Total Distributions</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, { color: theme.colors.success }]}>
              {summaryStats.totalBeneficiaries.toLocaleString()}
            </Text>
            <Text style={styles.statLabel}>Total Beneficiaries</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, { color: theme.colors.secondary }]}>
              {summaryStats.averageBeneficiaries.toLocaleString()}
            </Text>
            <Text style={styles.statLabel}>Average Beneficiaries</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, { color: theme.colors.warning }]}>
              {summaryStats.uniqueRegions}
            </Text>
            <Text style={styles.statLabel}>Unique Regions</Text>
          </View>
        </View>
      </View>

      {/* Pie Chart Data - Distributions by Aid Type */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Distributions by Aid Type</Text>
        <View style={styles.pieChartWrapper}>
          <PieChart
            data={pieChartData}
            width={250}
            height={200}
            chartConfig={chartConfig}
            accessor="value"
            backgroundColor="transparent"
            paddingLeft="55"
            absolute
            hasLegend={false}
          />
        </View>
        <View style={styles.pieDataContainer}>
          {pieData.map((item, index) => (
            <View key={item.name} style={styles.pieDataItem}>
              <View
                style={[
                  styles.colorIndicator,
                  { backgroundColor: getColorForIndex(index) },
                ]}
              />
              <View style={styles.pieDataText}>
                <Text style={styles.pieDataName}>{item.name}</Text>
                <Text style={styles.pieDataValue}>
                  {item.value} (
                  {(
                    (item.value / summaryStats.totalDistributions) *
                    100
                  ).toFixed(1)}
                  %)
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Line Chart Data - Beneficiaries Over Time */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Beneficiaries Over Time</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.lineChartScrollContainer}
        >
          <View style={styles.lineChartWrapper}>
            <LineChart
              data={lineChartData}
              width={Math.max(screenWidth - 32, 400)}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={styles.lineChart}
            />
          </View>
        </ScrollView>
      </View>

      {/* Bottom Spacer for Tabs */}
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const getColorForIndex = (index: number) => {
  const chartColorsArray = [
    chartColors.chartBlue,
    chartColors.chartGreen,
    chartColors.chartYellow,
    chartColors.chartOrange,
    chartColors.chartPurple,
  ];
  return chartColorsArray[index % chartColorsArray.length];
};

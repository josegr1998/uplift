import React from "react";
import { View, Text } from "react-native";
import { PieChart as RNChart } from "react-native-chart-kit";
import { createStyles } from "./PieChart.styles";
import { useTheme } from "../../../../context/ThemeContext";
import { PieChartData } from "../../DistributionCharts.types";
import { getColorForIndex } from "../../DistributionCharts.utils";

export const PieChart = ({
  pieApiData,
  summaryStats,
  pieChartData,
  chartConfig,
}: {
  pieApiData: PieChartData[];
  summaryStats: any;
  pieChartData: any[];
  chartConfig: any;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.sectionTitle}>Distributions by Aid Type</Text>
      <View style={styles.pieChartWrapper}>
        <RNChart
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
        {pieApiData.map((item, index) => (
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
                {((item.value / summaryStats.totalDistributions) * 100).toFixed(
                  1
                )}
                %)
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

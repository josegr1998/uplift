import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LineChart as RNChart } from "react-native-chart-kit";
import { createStyles } from "./LineChart.styles";
import { useTheme } from "../../../../context/ThemeContext";

export const LineChart = ({
  lineChartData,
  chartConfig,
  screenWidth,
}: {
  lineChartData: any;
  chartConfig: any;
  screenWidth: number;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.sectionTitle}>Beneficiaries Over Time</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lineChartScrollContainer}
      >
        <View style={styles.lineChartWrapper}>
          <RNChart
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
  );
};

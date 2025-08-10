import { View, Text, ScrollView } from "react-native";
import {
  ChartData,
  PieChartData,
  SummaryStats,
} from "./DistributionCharts.types";
import { createStyles } from "./DistributionChartsPresentation.styles";
import { useTheme } from "../../context/ThemeContext";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";
import { Loading } from "../Loading/Loading";
import { ErrorDisplay } from "../ErrorDisplay/ErrorDisplay";
import { PieChart } from "./components/PieChart/PieChart";
import { LineChart } from "./components/LineChart/LineChart";
import { Statistics } from "./components/Statistics/Statistics";

export type Props = {
  chartApiData: ChartData;
  isLoading: boolean;
  error: Error | null;
  pieChartData: PieChartData[];
  lineChartData: LineChartData;
  summaryStats: SummaryStats;
  screenWidth: number;
  chartConfig: ChartConfig;
};

export const DistributionChartsPresentation = ({
  chartApiData,
  isLoading,
  error,
  pieChartData,
  lineChartData,
  summaryStats,
  screenWidth,
  chartConfig,
}: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} onRetry={() => {}} />;
  }

  const { pieData: pieApiData } = chartApiData;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Distribution Analytics</Text>

      <Statistics summaryStats={summaryStats} />

      <PieChart
        pieApiData={pieApiData}
        summaryStats={summaryStats}
        pieChartData={pieChartData}
        chartConfig={chartConfig}
      />

      <LineChart
        lineChartData={lineChartData}
        chartConfig={chartConfig}
        screenWidth={screenWidth}
      />

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

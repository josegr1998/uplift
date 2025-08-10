import { Theme } from "mobile/context/ThemeContext";
import { chartColors } from "./DistributionChartsPresentation.styles";
import { LineChartData, PieChartData } from "./DistributionCharts.types";

export const getColorForIndex = (index: number) => {
  const chartColorsArray = [
    chartColors.chartBlue,
    chartColors.chartGreen,
    chartColors.chartYellow,
    chartColors.chartOrange,
    chartColors.chartPurple,
  ];
  return chartColorsArray[index % chartColorsArray.length];
};

export const createChartConfig = (theme: Theme) => {
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

  return chartConfig;
};

export const mapPieChartData = (pieData: PieChartData[]) =>
  pieData.map((item, index) => ({
    name: item.name,
    value: item.value,
    color: getColorForIndex(index),
    legendFontColor: "transparent",
    legendFontSize: 0,
  }));

export const mapLineChartData = ({
  lineData,
  theme,
}: {
  lineData: LineChartData[];
  theme: Theme;
}) => ({
  labels: lineData.map((item) => item.name),
  datasets: [
    {
      data: lineData.map((item) => item.beneficiaries),
      color: () => theme.colors.secondary,
      strokeWidth: 2,
    },
  ],
});

import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { COLORS } from "../../DistributionCharts.consts";
import { PieChartData } from "../../DistributionCharts.types";

type Props = {
  pieData: PieChartData[];
};

export const PieChart = ({ pieData }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
          }
          outerRadius={80}
          fill="var(--secondary)"
          dataKey="value"
        >
          {pieData.map((entry, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

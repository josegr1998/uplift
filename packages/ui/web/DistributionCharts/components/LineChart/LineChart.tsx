import { Line, LineChart as RechartsLineChart } from "recharts";

import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import { Legend } from "recharts";

import { ResponsiveContainer } from "recharts";
import { LineChartData } from "../../DistributionCharts.types";

type Props = {
  lineData: LineChartData[];
};

export const LineChart = ({ lineData }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="beneficiaries"
          stroke="var(--secondary)"
          strokeWidth={2}
          dot={{ fill: "var(--secondary)", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

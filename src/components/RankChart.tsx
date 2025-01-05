import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type RankData = {
  year: number;
  overallRank: number;
  genderRank: number;
};

type RankChartProps = {
  data: RankData[];
};

export function RankChart({ data }: RankChartProps) {
  const chartData = {
    labels: data.map((d) => d.year.toString()),
    datasets: [
      {
        label: "Overall Rank",
        data: data.map((d) => d.overallRank),
        borderColor: "teal",
        backgroundColor: "rgba(0, 128, 128, 0.2)",
        tension: 0.1,
        pointBackgroundColor: "teal",
        pointBorderColor: "teal",
      },
      {
        label: "Gender Rank",
        data: data.map((d) => d.genderRank),
        borderColor: "fuchsia",
        backgroundColor: "rgba(255, 0, 255, 0.2)",
        tension: 0.1,
        pointBackgroundColor: "fuchsia",
        pointBorderColor: "fuchsia",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Rank Progression",
        color: "white",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const dataset = context.dataset.label;
            const value = context.parsed.y;
            return `${dataset}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          color: "white",
        },
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Rank",
          color: "white",
        },
        ticks: {
          color: "white",
          precision: 0,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        reverse: true, // Lower rank (higher number) is worse
      },
    },
  };

  return (
    <div className="mt-4 w-full rounded-lg bg-gray-800 p-4">
      <Line data={chartData} options={options} />
    </div>
  );
}

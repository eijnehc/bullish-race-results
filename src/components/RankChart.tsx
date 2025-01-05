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
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Gender Rank",
        data: data.map((d) => d.genderRank),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.1,
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
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
        reverse: true,
        title: {
          display: true,
          text: "Rank (Lower is Better)",
          color: "white",
        },
        ticks: {
          color: "white",
          precision: 0,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="h-[300px] w-full rounded-lg bg-gray-800 p-4 md:h-[400px] lg:h-[500px]">
      <Line data={chartData} options={options} />
    </div>
  );
}

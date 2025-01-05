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

type ChartData = {
  year: number;
  time: string;
};

type TimeChartProps = {
  data: ChartData[];
};

export function TimeChart({ data }: TimeChartProps) {
  // Helper function to convert mm:ss to total seconds
  const timeToSeconds = (timeStr: string) => {
    const [minutes, seconds] = timeStr.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const chartData = {
    labels: data.map((d) => d.year.toString()),
    datasets: [
      {
        label: "Race Time (minutes)",
        data: data.map((d) => timeToSeconds(d.time)),
        borderColor: "aqua",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
        tension: 0.1,
        pointBackgroundColor: "aqua",
        pointBorderColor: "aqua",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Time Progression",
        color: "white",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const seconds = context.parsed.y;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `Time: ${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
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
          text: "Race Time (mm:ss)",
          color: "white",
        },
        ticks: {
          color: "white",
          callback: function (value: any) {
            const minutes = Math.floor(value / 60);
            const seconds = value % 60;
            return `${minutes}:${seconds.toString().padStart(2, "0")}`;
          },
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

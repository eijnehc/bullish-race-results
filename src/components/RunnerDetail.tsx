import { useNavigate, useParams } from "react-router-dom";

import raceResults from "../data/results.json";
import { RankChart } from "./RankChart";
import { TimeChart } from "./TimeChart";

export function RunnerDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  // Find the runner's data
  const runner = raceResults.find((r) => r.name === name);

  if (!runner) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 text-white">
        Runner not found
      </div>
    );
  }

  const data = Object.entries(runner.results)
    .map(([year, result]) => ({
      year: parseInt(year),
      time: result.time,
      overallRank: result.overall_rank || 0,
      genderRank: result.gender_rank || 0,
    }))
    .sort((a, b) => a.year - b.year);

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="mx-auto max-w-2xl rounded-lg bg-gray-800 p-6 shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
        >
          ← Back to Results
        </button>
        <h1 className="mb-6 text-center text-3xl font-bold">{runner.name}</h1>

        {data.length > 1 && (
          <>
            <TimeChart data={data} />
            <RankChart data={data} />
          </>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Object.entries(runner.results).map(([year, result]) => (
            <div key={year} className="rounded-lg bg-gray-700 p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">{year} Race</h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-bold">{result.time}</span>
                </p>
                <p className="flex justify-between">
                  <span>Overall Rank:</span>
                  <span className="font-bold">{result.overall_rank}</span>
                </p>
                <p className="flex justify-between">
                  <span>Gender Rank:</span>
                  <span className="font-bold">{result.gender_rank}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

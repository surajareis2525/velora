
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const fullData = [
  { time: '12AM', kWh: 0.4 },
  { time: '2AM', kWh: 0.6 },
  { time: '4AM', kWh: 1.0 },
  { time: '6AM', kWh: 1.4 },
  { time: '8AM', kWh: 1.7 },
  { time: '10AM', kWh: 2.1 },
];

export default function EnergyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setData((prev) => [...prev, fullData[index]]);
      index++;
      if (index >= fullData.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-slate-700 text-center mb-3">
        ⚡ Energy Usage
      </h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid stroke="#f1f5f9" strokeDasharray="5 5" />
          <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis unit=" kWh" tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f8fafc",
              borderColor: "#cbd5e1",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
            }}
          />
          <Line
            type="monotone"
            dataKey="kWh"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

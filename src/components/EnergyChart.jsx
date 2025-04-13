import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from 'recharts';
  import { useEffect, useState } from 'react';
  
  const fullData = [
    { time: '8 AM', usage: 0.5 },
    { time: '10 AM', usage: 0.8 },
    { time: '12 PM', usage: 1.2 },
    { time: '2 PM', usage: 1.4 },
    { time: '4 PM', usage: 1.1 },
    { time: '6 PM', usage: 0.9 },
    { time: '8 PM', usage: 0.6 },
  ];
  
  export default function EnergyChart() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setData((prev) => [...prev, fullData[index]]);
        index++;
        if (index >= fullData.length) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-lg rounded-2xl p-5 sm:p-6 w-full max-w-md mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 text-center">
          ⚡ Energy Usage
        </h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <CartesianGrid stroke="#e0f2fe" strokeDasharray="3 3" />
            <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#475569" }} />
            <YAxis unit=" kW" tick={{ fontSize: 12, fill: "#475569" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f0f9ff",
                borderColor: "#93c5fd",
                borderRadius: "0.75rem",
                fontSize: "0.875rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 7 }}
              isAnimationActive={true}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: '12AM', kWh: 0.4 },
  { name: '2AM', kWh: 0.6 },
  { name: '4AM', kWh: 1.0 },
  { name: '6AM', kWh: 1.4 },
  { name: '8AM', kWh: 1.7 },
  { name: '10AM', kWh: 2.1 },
];

export default function EnergyChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-md mb-4">
      <h2 className="text-lg font-semibold mb-2 text-slate-700">Energy Usage</h2>
      <LineChart width={300} height={200} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="kWh" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </div>
  );
}

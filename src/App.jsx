import EnergyChart from './components/EnergyChart';
import BottomNav from './components/BottomNav';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VeloraDashboardCard from './components/VeloraDashboardCard';

function App() {
  const [mode, setMode] = useState("Cooling");
  const [temp, setTemp] = useState(22);
  const [fanSpeed, setFanSpeed] = useState("Medium");
  const [ecoMode, setEcoMode] = useState(false);
  const [status, setStatus] = useState("Technician en route");
  const [settingsOpen, setSettingsOpen] = useState(false);

  const modes = ["Cooling", "Heating", "Off"];
  const fanOptions = ["Low", "Medium", "High"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-6 flex flex-col items-center justify-start font-sans relative overflow-hidden sm:justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
        Velora Control Panel
      </h1>

      {/* Dashboard Card */}
      <VeloraDashboardCard />

      {/* HVAC Mode */}
      <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-6 w-full max-w-md mb-4 text-center">
        <p className="text-base sm:text-lg text-gray-500">Current Mode</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 animate-pulse">{mode}</h2>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                mode === m
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-100"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm sm:text-base">Temperature</p>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-700">{temp}°C</h3>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm sm:text-base">Fan Speed</p>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-700">{fanSpeed}</h3>
        </div>
      </div>
      <EnergyChart />
      {/* Job Status */}
      <div className="bg-white shadow rounded-xl p-4 w-full max-w-md text-center mb-4">
        <p className="text-sm text-gray-500 mb-1">Status</p>
        <p className="text-blue-500 font-medium animate-pulse">{status}</p>
      </div>

      {/* Settings Button */}
      <button
        onClick={() => setSettingsOpen(true)}
        className="text-sm text-blue-500 underline mt-2 hover:text-blue-700"
      >
        Open Settings
      </button>

      {/* Animated Settings Drawer */}
      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50"
          >
            <div className="bg-white w-80 h-full p-6 shadow-lg overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">Settings</h3>

              {/* Temperature */}
              <div className="mb-4">
                <label className="block text-sm mb-1 text-gray-600">Set Temperature</label>
                <input
                  type="range"
                  min="16"
                  max="30"
                  value={temp}
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-lg mt-2 text-blue-600 font-medium">{temp}°C</div>
              </div>

              {/* Fan Speed */}
              <div className="mb-4">
                <label className="block text-sm mb-1 text-gray-600">Fan Speed</label>
                <select
                  value={fanSpeed}
                  onChange={(e) => setFanSpeed(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-gray-700"
                >
                  {fanOptions.map((speed) => (
                    <option key={speed} value={speed}>{speed}</option>
                  ))}
                </select>
              </div>

              {/* Eco Mode */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-600">Eco Mode</span>
                <input
                  type="checkbox"
                  checked={ecoMode}
                  onChange={(e) => setEcoMode(e.target.checked)}
                  className="w-5 h-5 accent-blue-500"
                />
              </div>

              <button
                onClick={() => setSettingsOpen(false)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Close Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}

export default App;

import { useEffect } from "react";

useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('http://localhost:3001/status');
    const data = await res.json();
    setTemp(data.temperature);
    setMode(data.hvacMode);
    setStatus(data.technician.status);
    setFanSpeed(data.fanSpeed || "Medium");
  };
  fetchData();
  const interval = setInterval(fetchData, 10000); // every 10 sec
  return () => clearInterval(interval);
}, []);












import { useState, useEffect } from "react";

export default function VeloraDashboardCard() {
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [energy, setEnergy] = useState(null);
  const [hvacMode, setHvacMode] = useState("");
  const [status, setStatus] = useState("");
  const [eta, setEta] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3002/status");
        const data = await res.json();
        setTemp(data.temperature);
        setHumidity(data.humidity);
        setEnergy(data.energy);
        setHvacMode(data.hvacMode);
        setStatus(data.technician.status);
        setEta(data.technician.eta);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-2xl shadow bg-white space-y-2">
      <h2 className="text-xl font-semibold">System Status</h2>
      <p>Temperature: {temp} °C</p>
      <p>Humidity: {humidity} %</p>
      <p>Energy Usage: {energy} kWh</p>
      <p>Mode: {hvacMode}</p>
      <p>Technician: {status} ({eta})</p>
    </div>
  );
}

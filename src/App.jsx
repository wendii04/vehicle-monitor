import { useState, useEffect } from "react";
import Header from "./components/Header";
import VehicleList from "./components/VehicleList";
import StatusCard from "./components/StatusCard";
import VehicleMap from "./components/VehicleMap";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorState from "./components/ErrorState";
import { vehicles } from "./data/vehicles";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);//error cambiar a tru para que aprezca

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const totalVehicles = vehicles.length;

  const onlineVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "Online"
  ).length;

  const offlineVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "Offline"
  ).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        onRetry={() => {
          setError(false);
          setLoading(true);

          setTimeout(() => {
            setLoading(false);
          }, 1200);
        }}
      />
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <Header
        totalVehicles={totalVehicles}
        onlineVehicles={onlineVehicles}
        offlineVehicles={offlineVehicles}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <VehicleList
              vehicles={vehicles}
              selectedVehicle={selectedVehicle}
              onSelectVehicle={setSelectedVehicle}
              darkMode={darkMode}
            />
          </div>

          <div className="md:col-span-2">
            <VehicleMap
              vehicle={selectedVehicle}
              darkMode={darkMode}
            />
          </div>

          <div className="md:col-span-3">
            <StatusCard
              vehicle={selectedVehicle}
              darkMode={darkMode}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;